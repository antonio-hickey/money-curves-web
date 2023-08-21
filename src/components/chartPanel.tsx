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
import { CurveData } from '../types';


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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'U.S Treasury Yield Curve',
    },
    customCanvasBackgroundColor: {
      color: '#172514',
    }
  },
};

interface ChartPanelProps {
  chartData: CurveData
}

export default function ChartPanel(props: ChartPanelProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-background-dark shadow border-4 border-solid rounded-xl border-accent-dark">
      <div className="px-4 py-5 sm:px-6">
      </div>
      <div className="bg-background-light px-4 sm:p-6">
        <Line options={options} data={props.chartData} />
      </div>
    </div>
  )
}
