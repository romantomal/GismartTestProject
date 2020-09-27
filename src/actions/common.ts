import {TAppDispatchThunk} from 'store';
import {ERROR_FETCHING, START_FETCHING, STOP_FETCHING, SUCCESS_FETCHING} from 'actions/actionTypes';
import axios from 'axios';
import {Rate} from '../core/models/Rate';
import {ApexChart, ApexOption, ApexSeries, Chart, Xaxis} from '../core/models/ApexChart';

export const fetchRate = (rateId: number, startDate: string, endDate: string) => async (dispatch: TAppDispatchThunk<never>) => {
    dispatch(startFetching());
    try {
        return await axios.get(`https://www.nbrb.by/api/exrates/rates/dynamics/${rateId}?startDate=${startDate}&endDate=${endDate}`)
          .then((response) => {
              const rates = convertRateResponse(response.data);
              dispatch(successFetching(rates));
              dispatch(stopFetching());
          });
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

function convertRateResponse(rates: Rate[]) {
    if (rates) {
        const categories = rates.map((rate) => new Date(rate.Date).toLocaleDateString());
        const data = rates.map((rate) => rate.Cur_OfficialRate);
        const options = new ApexOption(new Chart('basic-bar'), new Xaxis(categories));
        const series = [new ApexSeries('Rate', data)];
        return new ApexChart(options, series);
    } else {
        return null;
    }
}
