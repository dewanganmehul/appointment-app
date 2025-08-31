import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import MyProfile from './pages/MyProfile'
import Header from './components/Header'
import Speciality from './components/Speciality'
import Topdocs from './components/Topdocs'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {

  return (
    <div className='mx-4 sm:mx-[10%]'>
     <Navbar/>
  
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/doctors' element={<Doctors/>} />
         <Route path='/doctors' element={<Doctors/>} />
          <Route path='/doctors/:speciality' element={<Doctors/>} />
           <Route path='/login' element={<Login/>} />
          <Route path='/contact' element={<Contact/>} />   
          <Route path='/myprofile' element={<MyProfile/>} />
          <Route path='/myappointments' element={<MyAppointments/>} />
          <Route path='/appointment/:docId' element={<Appointment/>} />
          <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
             <Route path='/myprofile' element={<MyProfile/>} />

           
      </Routes>
      <Footer/>
      
    </div>
  
  )
}

export default App
