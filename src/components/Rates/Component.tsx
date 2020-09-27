import React from 'react';
import ApexChart, {Props} from 'react-apexcharts';
import {TReduxProps} from './Container';
import {StyledContainer} from './style';
import 'antd/dist/antd.css';
import {Menu, Dropdown} from 'antd';
import {fetchRate} from "actions/common";
import {rates} from "../../core/constants/rates";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

type TComponentProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & TReduxProps;

const Rates: React.FC<TComponentProps> = (props) => {

    const chartOptions = {};
    const chartSeries = [];
    const chartType = 'line';

    const menu = (
        <Menu>
            {rates.map(rate => {return (<Menu.Item key={rate.id} onClick={() => getRate(rate.id)}>{rate.name} - {rate.symbol}</Menu.Item>)})}
        </Menu>
    );

    const getRate = (rateId: number) => {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 7);
        props.fetchRate(rateId, dateToRateFormatString(startDate), dateToRateFormatString(endDate));
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
                width={500}
                height={300}
            />
            <Dropdown.Button
                overlay={menu}>
                Series
            </Dropdown.Button>
        </StyledContainer>
    )
};

const mapStateToProps = state => ({
        rateData: state.common.rateData,
        loading: state.common.loading
});

const mapDispatchToProps = dispatch => bindActionCreators({
        fetchRate: (rateId, startDate, endDate) => fetchRate(rateId, startDate, endDate)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Rates);
