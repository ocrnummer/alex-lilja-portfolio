import './App.css'
import TorusScene from './lib/threejs/SpinningTorus'
import Home from './pages/Home/Home'
import { NAV_BASE_URL } from './utils/SharedConsts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div className="canvas-container">
            <TorusScene />
          </div>
            <Routes>
              <Route path={NAV_BASE_URL} element={ <Home /> }/>
            </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
