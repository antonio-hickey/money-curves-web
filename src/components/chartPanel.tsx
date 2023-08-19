import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#6ba560',
      backgroundColor: '#a7caa080',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
    customCanvasBackgroundColor: {
      color: '#172514',
    }
  },
};


export default function ChartPanel() {
  return (
    <div className="overflow-hidden rounded-lg dark:bg-background-light bg-background-dark shadow border-4 border-solid rounded-xl border-accent-light dark:border-accent-dark">
      <div className="px-4 py-5 sm:px-6">
      </div>
      <div className="bg-background-dark dark:bg-background-light px-4 py-5 sm:p-6">
        <Line options={options} data={data} />
      </div>
    </div>
  )
}
