import { MODAL_OPEN, MODAL_CLOSE } from './modalConstants';
import { asyncActionStart, asyncActionFinish } from '../async/asyncActions';

export const openModal = (modalType, modalProps) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const openModalAsync = (modalType, modalProps) => {
  return async dispatch => {
    dispatch(asyncActionStart());
    await delay(1000);
    dispatch(openModal(modalType, modalProps));
    dispatch(asyncActionFinish());
  };
};

export const closeModalAsync = () => {
  return async dispatch => {
    dispatch(asyncActionStart());
    await delay(1000);
    dispatch({ type: MODAL_CLOSE });
    dispatch(asyncActionFinish());
  };
};
