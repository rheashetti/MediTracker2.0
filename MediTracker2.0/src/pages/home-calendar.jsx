import { useState } from 'react'
import '../App.css'
import HorizontalDatePicker from '../components/calendar'
import '../components/calendar.css'

const HomeCalendar = () => {
    return (
        <>
          <div className="App">
            <header className="App-header">
              <div className="greeting">Hello, patient!</div>
              <div className="patient-info">Birthdate: </div>
            </header>
            <main>
              <div className="Calendar">
                <HorizontalDatePicker />
              </div>
            </main>
          </div>
        </>
      );
}

export default HomeCalendar;



