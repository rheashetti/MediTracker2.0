import React, { useState } from 'react';
import Card from './Card';
import axios from 'axios';

const MedicineBook = () => {
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({
    title: '',
    description: '',
    Dosage: '',
    imgSrc: '',
    schedule: { days: [], time: '' },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'days') {
      setNewMedication((prevState) => {
        const updatedDays = prevState.schedule.days.includes(value)
          ? prevState.schedule.days.filter((day) => day !== value)
          : [...prevState.schedule.days, value];

        return {
          ...prevState,
          schedule: { ...prevState.schedule, days: updatedDays },
        };
      });
    } else if (name === 'time') {
      setNewMedication((prevState) => ({
        ...prevState,
        schedule: { ...prevState.schedule, time: value },
      }));
    } else {
      setNewMedication((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddMedication = (e) => {
    e.preventDefault();
    setMedications([...medications, newMedication]);
    axios
      .post('http://localhost:5000/addmed', newMedication)
      .then((response) => {
        setMedications(response.data.medications); // Update medications list
        setNewMedication({
          title: '',
          description: '',
          Dosage: '',
          imgSrc: '',
          schedule: { days: [], time: '' },
        }); // Reset form
      });
  };

  return (
    <div className="app-container">
      <header className="medi-header">
        <h1>MediTracker</h1>
      </header>
      <div className="medi-container">
        {/* Medication Form */}
        <div className="form">
          <form onSubmit={handleAddMedication} className="medication-form">
            <input
              type="text"
              name="title"
              placeholder="Medication Title"
              value={newMedication.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="Dosage"
              placeholder="Dosage"
              value={newMedication.Dosage}
              onChange={handleInputChange}
            />
            {/* Days of the week input */}
            <div className="schedule-days">
              <label>Select Days:</label>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <label key={day}>
                  <input
                    type="checkbox"
                    name="days"
                    value={day}
                    checked={newMedication.schedule.days.includes(day)}
                    onChange={handleInputChange}
                  />
                  {day}
                </label>
              ))}
            </div>
            {/* Time of day input */}
            <input
              type="time"
              name="time"
              value={newMedication.schedule.time}
              onChange={handleInputChange}
            />
            <button type="submit">Add Medication</button>
          </form>
        </div>

        {/* Medication Cards Display */}
        <div className="input-container">
          <div className="cards-container">
            {medications.map((medication, index) => (
              <Card
                key={index}
                title={medication.title}
                description={medication.description}
                Dosage={medication.Dosage}
                imgSrc={medication.imgSrc}
                schedule={medication.schedule}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineBook;
