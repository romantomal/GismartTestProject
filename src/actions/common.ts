import { TAppDispatchThunk } from 'store';
import {ERROR_FETCHING, START_FETCHING, STOP_FETCHING, SUCCESS_FETCHING} from 'actions/actionTypes';
import axios from "axios";

export const fetchRate = (rateId: number, startDate: string, endDate: string) => async (dispatch: TAppDispatchThunk<never>) => {
    dispatch(startFetching());
    try {
      const result = await axios.get(`https://www.nbrb.by/api/exrates/rates/dynamics/${rateId}?startDate=${startDate}&endDate=${endDate}`)
          .then((response) => {
            console.log(response);
            const rates = response.data || [];
            dispatch(successFetching(rates));
            dispatch(stopFetching());
          });
      return result;
    } catch (error) {
      dispatch(errorFetching(error));
      dispatch(stopFetching());
    }
};

export const startFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: START_FETCHING,
  })
};

export const stopFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: STOP_FETCHING,
  })
};

export const successFetching = (rates): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: SUCCESS_FETCHING,
    rates
  })
};

export const errorFetching = (error): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: ERROR_FETCHING,
    error
  })
};
