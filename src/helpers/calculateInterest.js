
    function calculateInterest(value, interest, month){
        const newValue = (interest / 100) * value;
        return newValue.toFixed(2);
    }

    export default function generateInstallments(value, interest, month){
        let valueInitial = value;
        let valueCalculateInitial = 0;
        const installments = [];

        for (let i = 0; i < month; i++) {
            const valueCalculate = Number(calculateInterest(valueInitial, interest)); // 47,2
            const fullValue = valueCalculate + valueInitial;// 5.947,20
            const fullValueCalculate = Number(valueCalculate + valueCalculateInitial);
            
            
            const valueInterest = (fullValueCalculate * 100) / value; // %
            
            const element = { 
                fullValue, 
                valueCalculate: fullValueCalculate, 
                valueInterest, 
                month: i + 1 
            };
            installments.push(element);
            valueInitial = fullValue;
            valueCalculateInitial = fullValueCalculate;
            
        }
        return installments;
    }

  