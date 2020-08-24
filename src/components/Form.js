import React, { useState, useEffect } from 'react'

export default function Form({data, onValueChange, onInterestChange, onMonthChange}) {
    const {value, interest, month} = data;
    
    const handleValueChange = (event) => {
        const newValue = Number(event.target.value);
        onValueChange(newValue);
    };

    const handleInterestChange = (event) => {
        const newInterest = Number(event.target.value);
        onInterestChange(newInterest);
    };

    const handleMonthChange = (event) => {
        const newMonth = Number(event.target.value);
        onMonthChange(newMonth);
    }
    


    return (
        <div className="container center">
            <div className="row">
                <div className="input-field col s4">
                    <input
                        id="inputMontante"
                        type="number"
                        min="100"
                        max="100000"
                        step="100"
                        autoFocus
                        value={value}
                        onChange={handleValueChange}
                        />
                    <label className="active" htmlFor="inputName">
                    Montante Inicial:
                    </label>
                </div>   
                <div className="input-field col s4">
                    <input
                        id="inputInterest"
                        type="number"
                        min="-12"
                        max="12"
                        step="0.5"
                        value={interest}
                        onChange={handleInterestChange}
                        />
                    <label className="active" htmlFor="inputName">
                    Taxa de Juros Mensal:
                    </label>
                </div>
                <div className="input-field col s4">
                    <input
                        id="inputMonths"
                        type="number"
                        min="1"
                        max="36"
                        step="1"
                        value={month}
                        onChange={handleMonthChange}
                        />
                    <label className="active" htmlFor="inputName">
                    Período (meses):
                    </label>
                </div>         
            </div>
        </div>
    )
}
