// src/components/TrainSeats.js
import React, { useState } from 'react';

const TrainSeats = () => {
  // Initialize seat status (example: 0 for available, 1 for booked, 2 for booked by you)
  const [seats, setSeats] = useState(Array(7).fill().map(() => Array(12).fill(0))); 

  const handleSeatClick = (row, col) => {
    // Change seat status on click (toggle for demonstration purposes)
    setSeats(prevSeats => {
      const updatedSeats = [...prevSeats];
      updatedSeats[row][col] = (updatedSeats[row][col] + 1) % 3;
      return updatedSeats;
    });
  };

  const getSeatColor = (status) => {
    switch (status) {
      case 1:
        return 'bg-red-500'; // Booked
      case 2:
        return 'bg-yellow-500'; // Booked by you
      default:
        return 'bg-green-500'; // Available
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl mb-4">Train Seats</h2>
      <div className="grid gap-2 grid-cols-12 grid-rows-7">
        {seats.map((row, rowIndex) => (
          row.map((seat, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-5 h-5 border-2 rounded-sm ${getSeatColor(seat)} cursor-pointer`}
              onClick={() => handleSeatClick(rowIndex, colIndex)}
            >
              {/* Optional seat number */}
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default TrainSeats;
