import React from 'react';
import Seat from './ui/Seat';

const SeatGrid = ({ seats, handleSeatClick }) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {seats.map((seat, index) => (
        <Seat
          key={index}
          seat={seat}
          handleSeatClick={handleSeatClick}
        />
      ))}
    </div>
  );
};

export default SeatGrid;
