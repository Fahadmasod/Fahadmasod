import React, { useState } from 'react';
import '../App.css'; // Import your CSS file with the .input-error class

const App = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [readAllDetails, setReadAllDetails] = useState(false);
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [ageError, setAgeError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    switch (true) {
      case name.trim() === '':
        setNameError('Name is required.');
    
      case address.trim() === '':
        setAddressError('Address is required.');
      
      case age.trim() === '':
        setAgeError('Age is required.');
        break;
      default:
        setNameError('');
        setAddressError('');
        setAgeError('');
        // Rest of the form submission logic
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('Age:', age);
        console.log('Gender:', gender);
    }
  };
  

  return (
    <div className='container'>
      <h2>Fill out the Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            className={nameError ? 'input-error' : ''}
            placeholder={nameError ? nameError : ''}
            onChange={(e) => {
              setName(e.target.value);
              setNameError('');
            }}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            className={addressError ? 'input-error' : ''}
            placeholder={addressError ? addressError : ''}
            onChange={(e) => {
              setAddress(e.target.value);
              setAddressError('');
            }}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            className={ageError ? 'input-error' : ''}
            placeholder={ageError ? ageError : ''}
            onChange={(e) => {
              setAge(e.target.value);
              setAgeError('');
            }}
          />
        </div>
        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />{' '}
              Female
            </label>
          </div>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={readAllDetails}
              onChange={() => setReadAllDetails(!readAllDetails)}
            />{' '}
            I have read all the details.
          </label>
        </div>
        <div>
          <button type="submit" disabled={!readAllDetails}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
