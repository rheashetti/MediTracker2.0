import { useState } from 'react'
import HorizontalDatePicker from '../components/calendar'
import '../components/home-calendar.css'

const HomeCalendar = () => {
  return (
    <div className="container">
      <header className="medi-header">
        <h1>MediTracker</h1>
      </header>
      <div className="App-header">
        <div className="greeting">Hello, Patient!</div>
        <div className="patient-info">DOB: </div>
      </div>
      <main className="main-content">
        <div className="Calendar">
          <HorizontalDatePicker />
        </div>
      </main>
    </div>
  );
}

export default HomeCalendar;
