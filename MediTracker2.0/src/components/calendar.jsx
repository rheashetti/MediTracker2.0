import React, { useState } from "react";
import { motion } from "framer-motion";

const events = {
    "2025-01-24": [
        { title: "Advil", description: "Take advil at 10 AM." },
    ],
    "2025-01-25": [
        { title: "Probiotic", description: "Medicine at 9 AM." },
        { title: "Medicine", description: "Medicine at 6 PM." },
    ],
    "2025-01-26": [
        { title: "Advil", description: "Take advil 5 PM." },
    ],
    "2025-01-27": [
        { title: "Advil", description: "Take advil 5 PM." },
    ],
    "2025-01-28": [
        { title: "Advil", description: "Take advil 5 PM." },
    ]
};

const HorizontalDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(Object.keys(events)[0]);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    };
  
    return (
      <div className="Calendar">
        <motion.div
          className="date-picker"
          whileTap={{ cursor: "grabbing" }}
        >
          {Object.keys(events).map((date) => (
            <button
              key={date}
              onClick={() => handleDateChange(date)}
              className={`date-button ${
                selectedDate === date ? "active" : ""
              }`}
            >
              {formatDate(date)}
            </button>
          ))}
        </motion.div>
  
        <div className="events-container">
          {events[selectedDate]?.length > 0 ? (
            events[selectedDate].map((event, index) => (
              <div key={index} className="event-card">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            ))
          ) : (
            <p>No events for this date.</p>
          )}
        </div>
      </div>
    );
  };
  
export default HorizontalDatePicker;
