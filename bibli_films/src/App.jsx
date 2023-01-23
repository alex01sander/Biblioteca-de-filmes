import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/navbar.components'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Outlet/>

    </div>
  )
}

export default App
