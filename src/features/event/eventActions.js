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

export const createEvent = event => {
  return {
    type: CREATE_EVENT,
    payload: {
      event // payload.event
    }
  };
};

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event // payload.event
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
