import React, { useState } from 'react';

function RadioButton() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="admission"
          checked={selectedOption === 'admission'}
          onChange={handleOptionChange}
        />
        Admission
      </label>
      <br/>
      
      <label>
        <input
          type="radio"
          value="finance"
          checked={selectedOption === 'finance'}
          onChange={handleOptionChange}
        />
        Finance
      </label>
      <br></br>

      <label>
        <input
          type="radio"
          value="Examination"
          checked={selectedOption === 'Examination'}
          onChange={handleOptionChange}
        />
        Examination
      </label>
      <br/>
      
      <label>
        <input
          type="radio"
          value="lec"
          checked={selectedOption === 'lec'}
          onChange={handleOptionChange}
        />
        Lecture timetable/learning
      </label>
      <br/>
      
      <label>
        <input
          type="radio"
          value="Paper"
          checked={selectedOption === 'Paper'}
          onChange={handleOptionChange}
        />
        Paper re-evaluation/learning
      </label>
      <br/>

      <label>
        <input
          type="radio"
          value="hostel"
          checked={selectedOption === 'hostel'}
          onChange={handleOptionChange}
        />
        Hostel
      </label>
      <br/>
      
      <label>
        <input
          type="radio"
          value="ragging"
          checked={selectedOption === 'ragging'}
          onChange={handleOptionChange}
        />
        Ragging
      </label>
      <br/>

      <label>
        <input
          type="radio"
          value="harassment"
          checked={selectedOption === 'harassment'}
          onChange={handleOptionChange}
        />
        Sexual Harassment
      </label>
      <br/>
      
      <label>
        <input
          type="radio"
          value="other"
          checked={selectedOption === 'other'}
          onChange={handleOptionChange}
        />
        Any other
      </label>
      
    </div>
  );
}

export default RadioButton;
