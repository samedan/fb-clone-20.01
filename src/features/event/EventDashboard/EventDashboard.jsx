import React, { Component } from 'react';
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { connect } from 'react-redux';
import { createEvent, updateEvent, deleteEvent } from '../eventActions';
import { openModal, openModalAsync } from '../../modals/modalActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events, openModalAsync, loading } = this.props;
    if (loading) {
      return <LoadingComponent inverted={loading} />;
    }
    return (
      <Grid>
        <GridColumn width={10}>
          <Button
            name="increment"
            onClick={e => openModalAsync(e.target.name, { data: 42 })}
            color="teal"
            content="Open Modal Async"
            loading={loading}
          />
          <Button
            name="decrement"
            onClick={e => openModalAsync(e.target.name, { data: 42 })}
            color="teal"
            content="Decrement Async"
          />
          <EventList
            events={events}
            // selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </GridColumn>
        <GridColumn width={6}>
          <h2>Activity Feed:</h2>
        </GridColumn>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  loading: state.async.loading
});

export default connect(mapStateToProps, {
  createEvent,
  updateEvent,
  deleteEvent,
  openModal,
  openModalAsync
})(EventDashboard);
