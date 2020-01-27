import React, { Component } from 'react';
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://www.randomlists.com/img/animals/chipmunk.webp',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://www.randomlists.com/img/animals/elk.webp'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://www.randomlists.com/img/animals/frog.webp'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://www.randomlists.com/img/animals/grizzly_bear.webp',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://www.randomlists.com/img/animals/grizzly_bear.webp'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://www.randomlists.com/img/animals/chipmunk.webp'
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false,
    selectedEvent: null
  };

  // handleFormIsOpenToggle = () => {
  //   // this.setState(prevState => ({ // destructuring from teh prevState
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen
  //   }));
  // };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/default.webp';
    this.setState(({ events }) => ({
      // events from prevState
      events: [...events, newEvent],
      isOpen: false
    }));
  };

  handleUpdateEvent = updatedEvent => {
    this.setState(({ events }) => ({
      // previousState
      events: events.map(eventInState => {
        // if there is update
        if (eventInState.id === updatedEvent.id) {
          return { ...updatedEvent }; // return a new event instead of existingEvent
        } else {
          // no update
          return eventInState;
        }
      }),
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.setState(({ events }) => ({
      events: events.filter(e => e.id !== id) // returns a new [] that excludes the evn.id
    }));
  };

  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <GridColumn width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </GridColumn>
        <GridColumn width={6}>
          <Button
            positive
            content="Create Event"
            onClick={this.handleCreateFormOpen}
          />
          {isOpen && (
            <EventForm
              updateEvent={this.handleUpdateEvent}
              key={selectedEvent ? selectedEvent.id : 0}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
            />
          )}
        </GridColumn>
      </Grid>
    );
  }
}

export default EventDashboard;
