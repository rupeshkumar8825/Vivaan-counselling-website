import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AppBar from './components/AppBar'
import routes from './routes/routes'
import DropDownMenu from './components/DropDownMenu'

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
          <DropDownMenu menuName='Exams' subMenuList={["d1", "d2", "d3"]} routesList={["/", "/exam", "/mentorship", "/counselling"]}></DropDownMenu>
        </Router>
    </div>
  )
}

export default App
