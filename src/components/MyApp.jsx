import  { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'; // Import the CSS
import '../App.css'

const MyApp = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div className="clock-container">
        <p>Current time:</p>
        <Clock value={value} size={500} /> {/* Adjust size here */}
      </div>
    </div>
  );
};

export default MyApp;
