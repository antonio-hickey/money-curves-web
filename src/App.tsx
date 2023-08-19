import Header from './components/header.tsx';
import ChartPanel from './components/chartPanel.tsx';

function App() {
  return (
     <>
      <div className="min-h-full bg-background-dark dark:bg-background-light">
        <Header activeModule="Curves" chartPanel={<ChartPanel />}/>
        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {<ChartPanel />}
          </div>
        </main>
      </div>
    </> 
  )
}

export default App
