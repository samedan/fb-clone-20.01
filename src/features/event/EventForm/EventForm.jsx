import React, { Component } from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { reduxForm, Field } from 'redux-form';
import cuid from 'cuid';
import TextInput from '../../../app/common/form/TextInput';
import { Textarea } from '../../../app/common/form/Textarea';
import SelectInput from '../../../app/common/form/SelectInput';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import DateInput from '../../../app/common/form/DateInput';

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' }
];

const validate = combineValidators({
  title: isRequired({ message: 'The event title is required' }),
  category: isRequired({ message: 'The category is required' }),
  description: composeValidators(
    isRequired({ message: 'Please enter a description' }),
    hasLengthGreaterThan(4)({
      message: 'Description needs at least 5 characters'
    })
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
});

class EventForm extends Component {
  manageFormsubmit = values => {
    if (this.props.initialValues.id) {
      // update OLD event
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/default.webp',
        hostedBy: 'Bob'
      };
      // create NEW event
      this.props.createEvent(newEvent); // createEvent from EventDashboard
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    // (evt)
    this.setState({ [name]: value });
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form
              onSubmit={this.props.handleSubmit(this.manageFormsubmit)}
              autoComplete="off"
            >
              <Field
                name="title"
                component={TextInput}
                placeholder="Give event a name"
              />
              <Field
                name="category"
                component={SelectInput}
                placeholder="What is your event about"
                options={category}
                // multiple={true}
              />
              <Field
                name="description"
                component={Textarea}
                rows="3"
                placeholder="Tell us about your event"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field name="city" component={TextInput} placeholder="City " />
              <Field name="venue" component={TextInput} placeholder="Venue " />
              <Field
                name="date"
                component={DateInput}
                placeholder="Date"
                showTimeSelect
                timeFormat="HH:mm"
                dateFormat="dd LLL yyyy h:mm a"
              />

              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                type="button"
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push('/events')
                }
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
    // console.log(event);
  }

  return { initialValues: event };
};

export default connect(mapStateToProps, { createEvent, updateEvent })(
  reduxForm({ form: 'eventForm', validate })(EventForm)
);
