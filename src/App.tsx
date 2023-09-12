import { useState, useEffect } from 'react';
import Header from './components/header.tsx';
import ChartPanel from './components/chartPanel.tsx';
import { CurveData } from './types.ts';


function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [data, setData] = useState<CurveData>();

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return (
     <>
      <div className="min-h-screen bg-background-light">
        <Header isMobile={width <= 800 ? true : false}/>
        <main className="-mt-32 ">
          <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 ">
            {<ChartPanel chartData={data ? data : null} setData={setData}/>}
          </div>
        </main>
      </div>
    </> 
  )
}

export default App
