import React from 'react'
import ApexChart, { Props } from 'react-apexcharts'
import { TReduxProps } from './Container'
import { StyledContainer } from './style'

export type TComponentProps = {
} & TReduxProps

const Rates: React.FC<TComponentProps> = () => {

  const chartOptions = {}
  const chartSeries = []
  const type = 'line'

  return (
    <StyledContainer>
      <ApexChart
        options={chartOptions}
        series={chartSeries}
        type={type}
        width={500}
        height={300}
      />
    </StyledContainer>
  )
}

export default Rates