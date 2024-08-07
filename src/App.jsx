import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayouts from './layouts/MainLayouts'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import TrainingsPage from './pages/TrainingsPage'
import ContactPage from './pages/ContactPage'
import NotFound from '../src/pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts />}>
      <Route index element={ <HomePage /> }/>
      <Route path='/about' element={ <AboutPage /> }/>
      <Route path='/services' element={ <ServicesPage /> }/>
      <Route path='/trainings' element={ <TrainingsPage /> }/>
      <Route path='/contact' element={ <ContactPage /> }/>
      <Route path='*' element={ < NotFound/> }/>
    </Route>
)
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App