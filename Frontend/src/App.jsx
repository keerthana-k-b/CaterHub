import React from 'react'
import Home from './pages/Home/home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from './pages/Home/LoginPage'
import RegistrationPage from './pages/Home/RegistrationPage'
import AboutUs from './pages/Home/AboutUs'
import ContactUs from './pages/Home/ContactUs'
import EventMenu from './pages/Menu/EventMenu'
import Navbar from './pages/Navbar'
import AdminHome from './pages/Admin/AdminHome'
import FeedbackManagement from './pages/Admin/FeedbackManagement'
import OrderManagement from './pages/Admin/OrderManagement'
import MenuManagement from './pages/Admin/MenuManagement'
import UserManagement from './pages/Admin/UserManagement'
import CatererHome from './pages/Caterer/CatererHome'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eventmenu" element={<EventMenu />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/adminhome" element={<AdminHome />}/>
      <Route path="/feedbackmanagement" element={<FeedbackManagement />}/>
      <Route path="/ordermanagement" element={<OrderManagement />}/>
      <Route path="/menumanagement" element={<MenuManagement />}/>
      <Route path="/usermanagement" element={<UserManagement />}/>
      <Route path="/feedbackmanagement" element={<FeedbackManagement />}/>
      <Route path="/catererhome" element={<CatererHome />}/>




      {/* <Route path="/contact" element={<ContactUs/>} />
      <Route path="/driver" element={<DriverBooking/>} />  */}
    </Routes>
  </BrowserRouter>
  )
}

export default App