import { useState } from 'react'
import HorizontalDatePicker from '../components/calendar'
import '../components/home-calendar.css'

const HomeCalendar = () => {
  return (
    <div className="container">
      <header className="App-header">
      <div className="greeting">Hello, Patient!</div>
      <div className="patient-info">DOB: </div>
      </header>
      <main className="main-content">
      <div className="Calendar">
        <HorizontalDatePicker />
      </div>
      </main>
    </div>
    );
}

export default HomeCalendar;
