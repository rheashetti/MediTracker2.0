import React, { useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const MedicineBook = () => {
  // Initial state with some default medication data
  const [medications, setMedications] = useState([
    /*{
      title: 'Ibuprofen',
      description: 'Used to treat pain, fever, and inflammation.',
      Dosage: '200mg',
      imgSrc: 'https://via.placeholder.com/40', // Replace with actual medication image URL
      schedule: { days: ['Monday', 'Wednesday', 'Friday'], time: '08:00 AM' },
    },
    {
      title: 'Vitamin C',
      description: 'Boosts immune system and prevents scurvy.',
      Dosage: '500mg',
      imgSrc: 'https://via.placeholder.com/40', // Replace with actual medication image URL
      schedule: { days: ['Sunday'], time: '09:00 AM' },
    },*/
  ]);

  // State to handle form inputs
  const [newMedication, setNewMedication] = useState({
    title: '',
    description: '',
    Dosage: '',
    imgSrc: '',
    schedule: { days: [], time: '' },
  });

    // Fetch medications from Flask backend
    /*useEffect(() => {
      axios.get('http://localhost:5000/api/medications')
        .then(response => {
          setMedications(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the medications!', error);
        });
    }, []);*/

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'days') {
      // Toggle the selected day
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

  // Handle form submission to add new medication
  const handleAddMedication = (e) => {
    e.preventDefault();

    setMedications([...medications, newMedication]);
    // Send a POST request to Flask to add the medication
    axios.post('http://localhost:5000/addmed', newMedication)
      .then(response => {
        setMedications(response.data.medications); // Update the medications state
        setNewMedication({
          title: '',
          description: '',
          Dosage: '',
          imgSrc: '',
          schedule: { days: [], time: '' },
        }); // Reset the form
      })
      
      
    // Add the new medication to the list
    //setMedications([...medications, newMedication]);
    // Reset the form
    setNewMedication({
      title: '',
      description: '',
      Dosage: '',
      imgSrc: '',
      schedule: { days: [], time: '' },
    });
  };

  return (
    <div className="app-container">
      <div>
        <h2>MediTracker</h2>
      </div>

      {/* Add Medication Form */}
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

      {/* Medication Cards Display */}
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
  );
};


export default MedicineBook;