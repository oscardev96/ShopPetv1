import {SAVE_NOTIFY} from '../types/NotifyTypes';

const initialState = {
  numberNofity: 0,
  notify: [],
  numberNofityNew: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NOTIFY:
      console.log('[ REDUCERS]', action.data);

      return {
        ...state,
        notify: state.notify.concat(action.data),
        numberNofity: state.numberNofity + 1,
        numberNofityNew: state.numberNofityNew + 1,
      };

    default:
      return state;
  }
};
