import { useId , useState} from "react";

function InputBox ({
label,
amount,
onAmountChange,
onCurrencyChange,
currencyOptions=[],
selectedCurrency = 'usd',
amountDisable = false,
currencyDisable = false,
 className = "",
}){

    const[selectCurrency,setSelectCurrency] = useState('usd');
    const amountInputId = useId();
    return(
   <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black mb-2 inline-block">
                 {label}
                </label>
            <input
            id={amountInputId}
            type="number"
            value={amount}
            disabled={amountDisable}
             className="outline-none w-full bg-transparent text-black py-1.5"
            onChange={(e)=>onAmountChange && 
                onAmountChange(Number(e.target.value))}
                placeholder="Amount"
            />
           <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                className="rounded-lg text-black px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                disabled={currencyDisable}
                onChange={(e)=>setSelectCurrency(onCurrencyChange && onCurrencyChange(e.target.value))}
                >
                    

                    {currencyOptions.map((currency)=>
                    <option key={currency} 
                    value={currency}>
                        {currency}
                    </option>)}

                </select>
            </div>
        </div>
         </div>
    )
}

export default InputBox;