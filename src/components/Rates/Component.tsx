import React, {useState} from 'react';
import ApexChart, {Props} from 'react-apexcharts';
import {TReduxProps} from './Container';
import {StyledContainer} from './style';
import 'antd/dist/antd.css';
import {Menu, Dropdown} from 'antd';
import {fetchRate} from 'actions/common';
import {rates} from '../../core/constants/rates';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RateConstant} from '../../core/models/Rate';

type TComponentProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & TReduxProps;

const Rates: React.FC<TComponentProps> = (props) => {

    const [chosenRateName, setChosenRateName] = useState('Select');
    const chartOptions = props.rates?.options || {};
    const chartSeries = props.rates?.series || [];
    const chartType = 'line';

    const menu = (
        <Menu>
            {rates.map(rate => {return (<Menu.Item key={rate.id} onClick={() => getRate(rate)}>{rate.name} - {rate.symbol}</Menu.Item>)})}
        </Menu>
    );

    const getRate = (rate: RateConstant) => {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 7);
        setChosenRateName(rate.name);
        props.fetchRate(rate.id, dateToRateFormatString(startDate), dateToRateFormatString(endDate));
    };

    const dateToRateFormatString = (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    };

    return (
        <StyledContainer>
            <ApexChart
                options={chartOptions}
                series={chartSeries}
                type={chartType}
                width={600}
                height={400}
            />
            <Dropdown.Button
                overlay={menu}
                trigger={['click']}>
                {chosenRateName}
            </Dropdown.Button>
        </StyledContainer>
    )
};

const mapStateToProps = state => ({
    rates: state.common.rates,
    fetching: state.common.fetching
});

const mapDispatchToProps = dispatch => bindActionCreators({
        fetchRate: (rateId, startDate, endDate) => fetchRate(rateId, startDate, endDate)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Rates);
