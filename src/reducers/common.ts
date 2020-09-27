import { AnyAction } from 'redux'
import {
  START_FETCHING,
  STOP_FETCHING,
} from 'actions/common'

const initState = {
  fetching: false,
}

export interface ICommonState {
  fetching: boolean
}

function commonReducer(state: ICommonState = initState, { type, payload = null }: AnyAction) {
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
    default:
      return state
  }
}

export default commonReducer
