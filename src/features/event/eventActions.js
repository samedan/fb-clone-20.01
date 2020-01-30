import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS
} from './eventConstants';
import { fetchSampleDAta } from '../../app/data/mockApi';
import {
  asyncActionFinish,
  asyncActionStart,
  asyncActionError
} from '../async/asyncActions';
import { toastr } from 'react-redux-toastr';

export const createEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: {
          event // payload.event
        }
      });
      toastr.success('Success!', 'Event has been created');
    } catch (error) {
      console.log(error);
      toastr.success('Oops', 'Error creating the event');
    }
  };
};

export const updateEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: {
          event // payload.event
        }
      });
      toastr.success('Success!', 'Event has been updated');
    } catch (error) {
      console.log(error);
      toastr.success('Oops', 'Error updating the event');
    }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const events = await fetchSampleDAta();
      dispatch({ type: FETCH_EVENTS, payload: { events } });
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
