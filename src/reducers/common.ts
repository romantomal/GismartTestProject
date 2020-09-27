import { AnyAction } from 'redux';
import {ERROR_FETCHING, START_FETCHING, STOP_FETCHING, SUCCESS_FETCHING} from "actions/actionTypes";

const initState = {
  fetching: false,
  rates: null,
  error: null
};

export interface ICommonState {
  fetching: boolean;
}

function commonReducer(state: ICommonState = initState, { type, rates, error }: AnyAction) {
  switch (type) {
    case START_FETCHING: {
      return {
        fetching: true,
      }
    }
    case STOP_FETCHING: {
      return {
        ...state,
        fetching: false,
      }
    }
    case SUCCESS_FETCHING: {
      return {
        ...state,
        rates
      }
    }
    case ERROR_FETCHING: {
      return {
        ...state,
        fetching: false,
        error
      }
    }
    default:
      return state;
  }
}

export default commonReducer
