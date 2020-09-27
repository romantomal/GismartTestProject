import React from 'react';
import ApexChart, {Props} from 'react-apexcharts';
import {TReduxProps} from './Container';
import {StyledContainer} from './style';
import 'antd/dist/antd.css';
import {Menu, Dropdown, Button} from 'antd';

export type TComponentProps = {} & TReduxProps;

const Rates: React.FC<TComponentProps> = () => {

    const chartOptions = {};
    const chartSeries = [];
    const chartType = 'line';

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key={0}>USD - $</Menu.Item>
            <Menu.Item key={1}>EUR - €</Menu.Item>
            <Menu.Item key={2}>RUR - ₽</Menu.Item>
        </Menu>
    );

    function handleMenuClick(e) {
        console.log('click', e);
    }

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

export default Rates;
