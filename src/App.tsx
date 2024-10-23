import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AppBarComponent from './components/AppBarComponent'
import routes from './routes/routes'

function App() {

  return (
    <div className='bg-blue border-4 border-red-500 min-h-screen'>
        <Router>
          <AppBarComponent></AppBarComponent>
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
