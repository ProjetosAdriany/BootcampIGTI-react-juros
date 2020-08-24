import React from 'react'

import css from './installment.module.css';
import formatReal from '../helpers/formatter';

export default function Installment({item}) {
    const {fullValue, valueCalculate, valueInterest, month} = item;
    let color1 = '';
    let color2 = '';

    valueInterest > 0 ? (color1 = '#43a047') : (color1 = '#f44336 ');
    valueInterest > 0 ? (color2 = '#039be5 ') : (color2 = '#ef6c00 ');
    
    return (
         <div className="card">
         <div className="card-content">
           <div className={css.container}>
             <div>
               <strong>{month}</strong>
             </div>
             <div className={css.data}>
               <div style={{ color: color1 }}>
                 <strong>{formatReal(fullValue)}</strong>
               </div>
               <div style={{ color: color1 }}>
                 <strong>{formatReal(valueCalculate)}</strong>
               </div>
               <div style={{ color: color2 }}>{valueInterest.toFixed(2) }%</div>
             </div>
           </div>
         </div>
       </div>
    )
}
