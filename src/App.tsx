import TorusScene from './lib/threejs/SpinningTorus'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Works from './pages/Works/Works'
import { NAV_BASE_URL, NAV_WORKS_URL } from './utils/SharedConsts'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div className="canvas-container">
            <TorusScene />
          </div>
          <Header />
          <main>
            <Routes>
              <Route path={NAV_BASE_URL} element={ <Home /> }/>
              <Route path={NAV_WORKS_URL} element={ <Works /> }/>
              <Route path="*" element={ <Navigate to={NAV_BASE_URL} replace /> }/>
            </Routes>
          </main>
          <Footer />
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
