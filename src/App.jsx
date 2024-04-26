import React from 'react'
import Profile from './components/profile'
import ContactButtons from './components/contact_buttons'
import About from './components/about_interests'
import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <div className='main'>
        <Profile/>
        <ContactButtons/>
        <About/>
        <Footer/>
    </div>
  )
}

export default App
