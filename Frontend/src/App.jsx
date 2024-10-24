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
import ManageOrders from './pages/Caterer/ManageOrders'
import ManageMenu from './pages/Caterer/ManageMenu'
import DeliveryManagement from './pages/Caterer/DeliveryManagement'
import CateringRequests from './pages/Caterer/CateringRequests'
import FeedbackForm from './pages/Client/Feedback'
import OrderPlacementForm from './pages/Client/OrderPlace'
import Payment from './pages/Client/Payment'
import EventScheduling from './pages/Client/EventScheduling'
import ClientProfile from './pages/Client/ClientProfile'
import DeliveryForm from './pages/Client/DeliveryForm'
import OrderCancellation from './pages/Client/OrderCancellation'
import OrderUpdate from './pages/Client/OrderUpdate'
import OrderTracking from './pages/Caterer/OrderTracking'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
    <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eventmenu" element={<EventMenu />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/feedbackform" element={<FeedbackForm />} />
      <Route path="/orderplacementform" element={<OrderPlacementForm />} />
      <Route path="/payment" element={<Payment />}/>
      <Route path="/eventscheduling" element={<EventScheduling />}/>
      <Route path="/clientprofile" element={<ClientProfile />}/> 
      <Route path="/deliveryform" element={<DeliveryForm />}/> 
      <Route path="/ordercancellation" element={<OrderCancellation />}/> 
      <Route path="/orderupdate" element={<OrderUpdate />}/> 
      <Route path="/adminhome" element={<AdminHome />}/>
      <Route path="/feedbackmanagement" element={<FeedbackManagement />}/>
      <Route path="/ordermanagement" element={<OrderManagement />}/>
      <Route path="/menumanagement" element={<MenuManagement />}/>
      <Route path="/usermanagement" element={<UserManagement />}/>
      <Route path="/feedbackmanagement" element={<FeedbackManagement />}/>
      <Route path="/catererhome" element={<CatererHome />}/>
      <Route path="/cateringrequests" element={<CateringRequests />}/>
      <Route path="/deliverymanagement" element={<DeliveryManagement />}/>
      <Route path="/manageorders" element={<ManageOrders />}/>
      <Route path="/managemenu" element={<ManageMenu />}/>
      <Route path="/ordertracking" element={<OrderTracking />}/>




      {/* <Route path="/contact" element={<ContactUs/>} />
      <Route path="/driver" element={<DriverBooking/>} />  */}
    </Routes>
  </BrowserRouter>
  </AuthProvider>
  )
}

export default App