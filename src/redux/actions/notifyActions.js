import {SAVE_NOTIFY} from '../types/NotifyTypes';
export const saveNotify = data => {
  return {
    type: SAVE_NOTIFY,
    data,
  };
};
