import {SAVE_NOTIFY} from '../types/NotifyTypes';

const initialState = {
  numberNofity: 0,
  notify: [],
  numberNofityNew: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NOTIFY:
      if (state.numberNofity == 0) {
        return {
          ...state,
          notify: [...state.notify, action.data],
          numberNofity: 1,
          numberNofityNew: 1,
        };
      } else {
        return {
          ...state,
          notify: [...action.data, ...state],
          numberNofity: state.numberNofity + 1,
          numberNofityNew: state.numberNofityNew + 1,
        };
      }

    default:
      return state;
  }
};
