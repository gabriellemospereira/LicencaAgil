import React from 'react'
import './calendar.css'


import Footer from '../../Footer'
import Header from '../../Header'
import HeaderLogo from '../../HeaderLogo'

export default function Calendario(){
  return(
    <div>
      <HeaderLogo></HeaderLogo>
      <Header></Header>


 
<iframe className='calendario' src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ217w8nwCZxLGk-llroW_St5Cbw3YK0Cq18_a1uHTO3vG11FG3V6EGjr8SZhgJu8xzaMHeTQvcn?gv=true" ></iframe>


    
      


    <Footer></Footer>
    </div>
  )
}