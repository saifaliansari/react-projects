import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxDataPointValue = Math.max(...dataPointValue)
    return (
        <div className='chart'>
            {props.dataPoints.map(datapoint =>
                <ChartBar value={datapoint.value}
                    label={datapoint.label}
                    maxValue={maxDataPointValue}
                />
            )}
        </div>
    )
}

export default Chart;