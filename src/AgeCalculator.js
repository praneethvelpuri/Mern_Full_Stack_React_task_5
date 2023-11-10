import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();

    // Calculate the difference in years
    const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday for this year has occurred or not
    const hasBirthdayOccurred = (
      currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate())
    );

    const finalAge = hasBirthdayOccurred ? ageDifference : ageDifference - 1;

    setAge(finalAge);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
        <h1>Age Calculator</h1>
      <label>
        <h3 style={{ marginBottom: '10px' }}>Enter your date of birth</h3>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{ width: '80%', marginBottom: '10px', padding:'5px' }}
        />
      </label>
      <button
        onClick={calculateAge}
        style={{
          backgroundColor:"blue",
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Calculate Age
      </button>

      {age !== null && (
        <p style={{ marginTop: '20px' }}>
          <h2>You are {age} years old.</h2>
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;