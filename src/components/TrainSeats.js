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
        return 'bg-gradient-to-r from-red-500 to-red-900'; // Booked
      case 2:
        return 'bg-gradient-to-r from-pink-500 to-violet-500'; // Booked by you
      default:
        return 'bg-gradient-to-r from-green-500 to-green-800'; // Available
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg font-semibold mb-4 text-white">Train Seats</h2>
      <div className="flex space-x-2">
        {seats[0].map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center space-y-2">
            <div className="grid gap-1">
              {seats.map((row, rowIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-6 h-6 rounded-md ${getSeatColor(row[colIndex])} cursor-pointer flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105`}
                  onClick={() => handleSeatClick(rowIndex, colIndex)}
                >
                  {/* Optional seat icon */}
                </div>
              ))}
            </div>
            {/* Column number at the bottom of each column */}
            <span className="text-sm font-thin text-gray-400 mt-2">{`Row ${colIndex + 1}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainSeats;

