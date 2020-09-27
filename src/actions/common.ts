import { IAction, IAppState, TAppDispatchThunk } from 'store'

const MODULE_NAME = 'COMMON'

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`
export const STOP_FETCHING = `${MODULE_NAME}/STOP_FETCHING`

export const startFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: START_FETCHING,
  })
}
export const stopFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: STOP_FETCHING,
  })
}
