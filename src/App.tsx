import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AppBarComponent from './components/AppBarComponent'
import routes from './routes/routes'
import { useState } from 'react'
import LoginFormPage from './pages/authentication/LoginFormPage'

function App() {
  // states for the app component comes here
  const [isOpen, setIsOpen] = useState<boolean>(false)

  //handlers comes here for the app component
  const handleOpenLoginForm = () => {
    setIsOpen(true)
  }

  const handleCloseLoginForm = () => {
    setIsOpen(false)
  }

  return (
    <div className='bg-blue min-h-screen'>
        <Router>
          <AppBarComponent handleOpenLoginForm={handleOpenLoginForm}></AppBarComponent>
          {isOpen && <LoginFormPage handleOpenLoginForm={handleOpenLoginForm} handleCloseLoginForm={handleCloseLoginForm}></LoginFormPage>}
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
