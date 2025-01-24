import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AppBarComponent from './components/AppBarComponent'
import routes from './routes/routes'
import FooterComponent from './components/common/FooterComponent'
import AskMeHangingElementComponent from './components/common/AskMeHangingElementComponent'


function App() {

  return (
    <div className='bg-blue min-h-screen'>
        <Router>
          <AppBarComponent></AppBarComponent>
          <Routes>
            {routes.map((currRoute, index:number) => (
              <Route key={index} path={currRoute.path} element={currRoute.component}/>
            ))}
          </Routes>
          <AskMeHangingElementComponent></AskMeHangingElementComponent>
          <FooterComponent/>
        </Router>
    </div>
  )
}

export default App
