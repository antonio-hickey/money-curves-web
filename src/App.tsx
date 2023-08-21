import { useState, useEffect } from 'react';
import Header from './components/header.tsx';
import ChartPanel from './components/chartPanel.tsx';
import { CurveData } from './types.ts';


function App() {
  const [data, setData] = useState<CurveData>();

  useEffect(() => {
    if (!data) {
      fetch('https://tx5dqdiyy3.execute-api.us-east-1.amazonaws.com/dev/fetch-curve')
        .then(resp => resp.json())
        .then(resp => {
          let curveData = {
            labels: ['1 mo', '2 mo', '3 mo', '6 mo', '1 yr', '2 yr', '3 yr', '5 yr', '7 yr', '10 yr', '20 yr', '30 yr'],
            datasets: [
              {
                fill: true,
                label: "% Interest Rate",
                data: [
                  resp.mo_1, resp.mo_2, resp.mo_3, 
                  resp.mo_6, resp.yr_1, resp.yr_2,
                  resp.yr_3, resp.yr_5, resp.yr_7, 
                  resp.yr_10, resp.yr_20, resp.yr_30,
                ],
        borderColor: '#6ba560',
        backgroundColor: '#a7caa080',
              }
            ] 
          };
          setData(curveData);
        }) 
    }
  })

  return (
     <>
      <div className="min-h-screen bg-background-light">
        <Header />
        <main className="-mt-32 ">
          <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 ">
            {data ? <ChartPanel chartData={data}/>: null}
          </div>
        </main>
      </div>
    </> 
  )
}

export default App
