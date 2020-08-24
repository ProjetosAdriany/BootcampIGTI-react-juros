import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';
import generateInstallments from './helpers/calculateInterest';


export default function App() {

  const [value, setValue] = useState(5900);
  const [interest, setInterest] = useState(0.8);
  const [month, setMonth] = useState(12);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    const listInstallments = generateInstallments(value, interest, month);
    setInstallments(listInstallments);
  }, [value, interest, month])

  const handleValueChange = (newValue) => {
    setValue(newValue);
  }

  const handleInterestChange = (newInterest) => {
    setInterest(newInterest);
  };

  const handleMonthChange = (newMonth) => {
    setMonth(newMonth);
  };
    return (
        <div>
          <h1 className="center">React - Juros Compostos</h1>
          <Form data={{value, interest, month}} 
                onValueChange={handleValueChange} 
                onInterestChange={handleInterestChange}
                onMonthChange={handleMonthChange}
          />
          <Installments listInstallments={installments}/>
        </div>
      )
}
