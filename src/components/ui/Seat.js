import React from 'react';

const Seat = ({ seat, handleSeatClick }) => {
  // Function to set seat color based on booking status
  const getSeatColor = () => {
    if (seat.isBooked) {
      return 'bg-red-500'; // Booked seat (Red)
    } else if (seat.isBookedByYou) {
      return 'bg-blue-500'; // Booked by current user (Blue)
    } else {
      return 'bg-green-500'; // Available seat (Green)
    }
  };

  return (
    <div
      className={`w-12 h-12 border rounded-md cursor-pointer flex justify-center items-center ${getSeatColor()}`}
      onClick={() => handleSeatClick(seat)}
    >
      {seat.seatNumber}
    </div>
  );
};

export default Seat;
