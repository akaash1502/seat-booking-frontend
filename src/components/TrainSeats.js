import React, { useState , useEffect} from 'react';
import axios from 'axios';

const TrainSeats = ({numSeats}) => {
  // Initialize seat status (example: 0 for available, 1 for booked, 2 for booked by you)
  const [seats, setSeats] = useState(Array(7).fill().map(() => Array(12).fill(0)));

  // Function to fetch the current seat status (including booked seats)
  useEffect(() => {
    const fetchBookedSeats = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/seats'); 
        // Replace with your endpoint to get the booked seats status
        console.log(response.data);
        const bookedSeats = response.data.bookedSeats; // Extract the booked seats array from response

      // Update seat statuses based on backend response
      const updatedSeats = [...seats];
      console.log(updatedSeats);
      bookedSeats.forEach(({ row_number, seat_number }) => {
        // Mark seat as booked (1)
        updatedSeats[seat_number%7][row_number - 1] = 1; // Adjusting for zero-based index
      });
      console.log(updatedSeats);
      setSeats(updatedSeats);
      } catch (error) {
        console.error('Error fetching booked seats:', error);
      }
    };
    fetchBookedSeats();
  }, []);

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

  const handleBookSeats = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/book', { num_seats: numSeats });
    console.log(response.data);

    // Extract the seats array from the response
    const { seats: bookedSeats } = response.data;

    // Create a copy of the current seats state
    const updatedSeats = [...seats];

    // Update seat statuses based on the booked seats
    bookedSeats.forEach(({ row_number, seat_number }) => {
      updatedSeats[seat_number%7][row_number - 1] = 2; // Adjust for 1-based to 0-based indexing
    });

    // Update the state with the new seat booking statuses
    setSeats(updatedSeats);
    } catch (error) {
      console.error('Error booking seats:', error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-2">
        {seats[0].map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center space-y-2">
            <div className="grid gap-1">
              {seats.map((row, rowIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-6 h-6 rounded-md ${getSeatColor(row[colIndex])} cursor-pointer flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105`}
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
      <button
        onClick={handleBookSeats}
        className="mt-4 bg-blue-600 text-white p-2 rounded-md"

      >
        Book Seats
      </button>
    </div>
  );
};

export default TrainSeats;

