import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';

class EventForm extends Component {
  state = {
    ...this.props.event
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }

  handleFormsubmit = evt => {
    evt.preventDefault();
    if (this.state.id) {
      // update OLD event
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: '/assets/default.webp'
      };
      // create NEW event
      this.props.createEvent(newEvent); // createEvent from EventDashboard
      this.props.history.push(`/events/`);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    // (evt)
    this.setState({ [name]: value });
  };

  render() {
    const { title, date, city, venue, hostedBy } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.handleFormsubmit} autoComplete="off">
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.handleInputChange}
              value={title}
              name="title"
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              onChange={this.handleInputChange}
              value={date}
              name="date"
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              onChange={this.handleInputChange}
              value={city}
              name="city"
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              onChange={this.handleInputChange}
              value={venue}
              name="venue"
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              onChange={this.handleInputChange}
              value={hostedBy}
              name="hostedBy"
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={this.props.history.goBack}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
    // console.log(event);
  }

  return { event };
};

export default connect(mapStateToProps, { createEvent, updateEvent })(
  EventForm
);
