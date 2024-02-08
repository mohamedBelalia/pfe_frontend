import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut as DOU } from "react-chartjs-2"
import { ChartOptions } from 'chart.js';

const Doughnut = () => {

    Chart.register(
        ArcElement,
        Tooltip,
        Legend
    )

    const data = {
        datasets: [
            {
                data: [91, 9],
                backgroundColor: [
                    '#349292',
                    '#D0D3DA',
                ],
                borderWidth: 3,
            },
        ],
    };
    const options: ChartOptions<'doughnut'> = {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Doughnut Chart',
            },
        },
    };


    return (

        <DOU className='w-24' data={data} options={options} />
    )
}

export default Doughnut