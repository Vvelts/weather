import './CircleHalfChart.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { memo, useMemo } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function circleEq(x: number) {
    return Number(Math.sqrt(36 - (x - Math.sqrt(36)) ** 2).toFixed(1))
}

function CircleHalfChart({ uvi }: { uvi: number }) {

    const labels: number[] = [];

    for (let i = 0; i < 13; i += 0.5) {
        labels.push(i);
    }

    let currentUVI = useMemo(() => {
        return labels.filter((item) => item < uvi).map((item) => circleEq(item));
    }, [uvi])

    const data = {
        labels: labels,
        datasets: [
            {
                data: currentUVI,
                borderColor: '#31DAFF',
                borderWidth: 20,
                pointRadius: 0.2,
                tension: 0.2,
            },
            {
                data: labels.map((item) => circleEq(item)),
                borderColor: '#536064',
                borderWidth: 10,
                pointRadius: 0.1,
                tension: 1,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: { display: false },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: { display: false },
                grid: {
                    display: false
                }
            }
        }
    }

    return (
        <div className='circle-chart'>
            <Line options={options} data={data} />
        </div>
    );
}

export default memo(CircleHalfChart);