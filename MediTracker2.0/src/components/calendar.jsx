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
        <div className="flex flex-col items-center p-4">
            <motion.div
                className="flex overflow-x-auto space-x-4 pb-4"
                whileTap={{ cursor: "grabbing" }}
            >
                {Object.keys(events).map((date) => (
                    <button
                        key={date}
                        onClick={() => handleDateChange(date)}
                        className={`px-4 py-4 mx-2 rounded-full border ${
                            selectedDate === date ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        {formatDate(date)}
                    </button>
                ))}
            </motion.div>

            <div className="mt-6">
                {events[selectedDate]?.length > 0 ? (
                    events[selectedDate].map((event, index) => (
                        <div key={index} className="mb-4 w-full max-w-md bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <p className="text-gray-600">{event.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No events for this date.</p>
                )}
            </div>
        </div>
    );
};

export default HorizontalDatePicker;
