import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

class EventListItem extends Component {
  render() {
    const { event, deleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />
            {format(event.date.toDate(), 'EEEE do LLL')} at{' '}
            {format(event.date.toDate(), 'h:mm a')} |
            {/* {format(parseISO(event.date), 'EEEE do LLL')} at{' '}
            {format(parseISO(event.date), 'h:mm a')} | */}
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {// turn Objects in Arrays
            event.attendees &&
              Object.values(event.attendees).map((attendee, index) => (
                <EventListAttendee attendee={attendee} key={index} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            as="a"
            color="red"
            floated="right"
            content="Delete"
            onClick={() => deleteEvent(event.id)}
          />
          <Button
            as={Link}
            color="teal"
            floated="right"
            content="View"
            to={`/events/${event.id}`}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
