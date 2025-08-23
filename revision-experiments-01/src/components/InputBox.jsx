import { useId } from "react";

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd", 
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    let amountId = useId();

    return (
        <div className={`w-full  bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                {/* Box label */}
                <label  className="text-black/40 mb-2 inline-block" htmlFor={amountId}>
                    {label}
                </label>
                {/* Input Amount */}
                <input
                    id={amountId}
                    className="text-black px-1 outline-none w-full bg-transparent py-1.5 border-2 border-amber-600 rounded-[10px]"
                    type="number"
                    min={0}
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={isNaN(amount) ? 0 : amount}
                    onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/60 mb-2 w-full">Currency Type</p>
                {/* Currency Selection */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-600 cursor-pointer outline-none overscroll-y-contain"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    onChange={(e)=>{
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }}
                >
                   {currencyOptions.map((currency) => (
                        <option 
                            key={currency} 
                            value={currency}
                        >
                            {currency}
                        </option>
                   ))} 
                
                </select>
            </div>
        </div>
    );
}
