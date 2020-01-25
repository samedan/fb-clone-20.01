import React, { Component, Fragment } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <Fragment>
        <List.Item>
          <Image as="a" size="mini" circular src={attendee.photoURL} />
        </List.Item>
      </Fragment>
    );
  }
}

export default EventListAttendee;
