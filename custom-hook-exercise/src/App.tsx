import useTime from './useTime'
import './App.css'

function App() {
  const day = useTime<string>("day");   
  const hour = useTime<string>("hour"); 

  return (
    <>
       <h3>Day: {day}</h3>
       <h3>Hour: {hour}</h3>
    </>
  )
}

export default App
