import { AnyAction } from 'redux';
import {ERROR_FETCHING, START_FETCHING, STOP_FETCHING, SUCCESS_FETCHING} from "actions/actionTypes";

const initState = {
  fetching: false,
  rateData: {},
  error: null
};

export interface ICommonState {
  fetching: boolean;
}

function commonReducer(state: ICommonState = initState, { type, rateData, error }: AnyAction) {
  switch (type) {
    case START_FETCHING: {
      return {
        fetching: true,
      }
    }
    case STOP_FETCHING: {
      return {
        fetching: false,
      }
    }
    case SUCCESS_FETCHING: {
      return {
        fetching: true,
        rateData
      }
    }
    case ERROR_FETCHING: {
      return {
        fetching: false,
        error
      }
    }
    default:
      return state;
  }
}

export default commonReducer
