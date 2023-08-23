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
import { useEffect, useState } from 'react';
import { pandemicUSTCurves } from '../data';


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
    scales: {
      y: {
        min: 0.00,
      }
    },
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

function updateLoaderCurve(idx: number) {
  const MAX = pandemicUSTCurves.length;
  if (idx >= MAX) {
    idx -= MAX;
  }

  return {
    labels: ['1 mo', '2 mo', '3 mo', '6 mo', '1 yr', '2 yr', '3 yr', '5 yr', '7 yr', '10 yr', '20 yr', '30 yr'],
    datasets: [
      {
        fill: true,
        label: "% Interest Rate",
        data: Object.values(pandemicUSTCurves[idx]),
        borderColor: '#6ba560',
        backgroundColor: '#a7caa080',
        borderWidth: 6
      }
    ]
  }
}

interface ChartPanelProps {
  chartData: CurveData | null
}

export default function ChartPanel(props: ChartPanelProps) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(props.chartData ? props.chartData : updateLoaderCurve(count));

  useEffect(() => {
    if (!props.chartData) {
      // If still waiting for chart data from backend
      // then do a chart "animation"ish while waiting
      setTimeout(() => {
        setCount(prev => prev == pandemicUSTCurves.length ? 0 : prev += 1);
        setData(updateLoaderCurve(count));
      }, 1000);
    } else {
      // Finally got the data so use it
      setData(props.chartData);
    }
  }, [props.chartData, data, count]);


  return (
    <div className="overflow-hidden rounded-lg bg-background-dark shadow border-4 border-solid rounded-xl border-accent-dark">
      <div className="px-4 py-[1.67rem] sm:px-6 flex flex-row">
      </div>
      <div className="bg-background-light px-4 sm:p-6 border-t-4 border-accent-dark">
        <Line options={options} data={data}/>
      </div>
    </div>
  )
}
