import React from 'react'
import Installment from './Installment';

export default function Installments({listInstallments}) {
    
    return (
        <div className="container center"> 
            <div className="row">
                    { listInstallments.map((item) => {
                        
                        return (<div className="col s2" key={item.month}>
                                    <Installment item={item}/>
                                </div>)
                    })}
            </div>
        </div>
    )
}   