import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AppBar from './components/AppBar'
import routes from './routes/routes'

function App() {

  return (
    <div>
        <Router>
          <AppBar></AppBar>
          <Routes>
            {routes.map((currRoute, index:number) => (
              <Route key={index} path={currRoute.path} element={currRoute.component}/>
            ))}
          </Routes>
        </Router>
    </div>
  )
}

export default App
