// import { useEffect, useState, useMemo } from "react";
// import { InputBox, Button_1 } from "./components";
// import useCurrencyInfo from './hooks/getCurrencyInfo'

// function App() {

//   console.log('App Re/building')

//   const [fromCurrency, setFromCurrency] = useState('usd');
//   const [toCurrency, setToCurrency] = useState('inr');
//   const [amount, setAmount] = useState(0);
//   const [convertedAmount, setConvertedAmount] = useState(0)

//   let currency_info = useCurrencyInfo(fromCurrency)
//   // const currency_options = Object.keys(currency_info || {}) 
//   const currency_options = useMemo(
//     () => Object.keys(currency_info || {}),
//     [currency_info]
//   );



//   useEffect(()=>{
//       let outputAmount = amount * currency_info[toCurrency];
//       setConvertedAmount(outputAmount)
//   }, [amount, fromCurrency, toCurrency, currency_info])

//   return (
//     // Window - Body
//     <div  className="w-screen h-screen bg-gray-700 flex flex-col justify-center items-center">
      
//       {/* Display Window */}
//       <div  className="bg-[#4341a79a] p-5 w-1/3 h-80  flex flex-col justify-center items-center rounded-[15px]">
        
//         {/* From */}
//         <InputBox label={"From"} selectCurrency={fromCurrency} amount={amount} currencyOptions={currency_options}
//           onAmountChange={(value)=>{
//             setAmount(value)
//           }}
//         onCurrencyChange={(value)=>{
//             setFromCurrency(value) 
//         }}/>
        
//         <div className="h-2"></div>

//         {/* Swap */}
//         <Button_1 text="SWAP" 
//           onclick={()=>{
//             // Currency Exchange
//             let from_curr = fromCurrency;
//             setFromCurrency(toCurrency)
//             setToCurrency(from_curr)
//         }}/>
        
//         <div className="h-2"></div>

//         {/* To */}
//         <InputBox 
//           label="To" 
//           selectCurrency={toCurrency} 
//           currencyOptions={currency_options} 
//           amount={convertedAmount}
//           // onCurrencyChange={(value)=>{
//           //   //setToCurrency(value)}

//           // }
//            />
        
//         {/* Convert Amount Button */}
//         <div className="m-1 w-full h-10 bg-green-500 mt-2 p-6  rounded-2xl flex justify-center items-center text-2xl" 
//         onClick={()=>{
//           let outputAmount = amount * currency_info[toCurrency];
//           setConvertedAmount(outputAmount)
//         }}>
//           Convert Amount
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import { useMemo, useState } from "react";
import { InputBox, Button_1 } from "./components";
import useCurrencyInfo from './hooks/getCurrencyInfo';

function App() {

  console.log('App Re/building');

  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [amount, setAmount] = useState(0);

  // Fetch currency info only for the "fromCurrency"
  let currency_info = useCurrencyInfo(fromCurrency);

  // Memoize keys so child components don't re-render unnecessarily
  const currency_options = useMemo(
    () => Object.keys(currency_info || {}),
    [currency_info]
  );

  // Calculate directly instead of storing in state
  const convertedAmount = useMemo(() => {
    return amount * (currency_info[toCurrency] || 0);
  }, [amount, toCurrency, currency_info]);

  return (
    // Window - Body
    <div className="w-screen h-screen bg-gray-700 flex flex-col justify-center items-center">
      
      {/* Display Window */}
      <div className="bg-[#4341a79a] p-5 w-1/3 h-80 flex flex-col justify-center items-center rounded-[15px]">
        
        {/* From */}
        <InputBox 
          label="From"
          selectCurrency={fromCurrency}
          amount={amount}
          currencyOptions={currency_options}
          onAmountChange={(value) => setAmount(value)}
          onCurrencyChange={(value) => setFromCurrency(value)}
        />
        
        <div className="h-2"></div>

        {/* Swap */}
        <Button_1 
          text="SWAP" 
          onclick={() => {
            let from_curr = fromCurrency;
            setFromCurrency(toCurrency);
            setToCurrency(from_curr);
          }}
        />
        
        <div className="h-2"></div>

        {/* To */}
        <InputBox 
          label="To"
          selectCurrency={toCurrency}
          currencyOptions={currency_options}
          amount={convertedAmount}
          onCurrencyChange={(value) => setToCurrency(value)}
          amountDisable={true}
        />
        
        {/* Convert Amount Button */}
        <div 
          className="m-1 w-full h-10 bg-green-500 mt-2 p-6 rounded-2xl flex justify-center items-center text-2xl cursor-pointer" 
          onClick={() => {
            // This now does nothing special because convertedAmount is already updated in real-time
            console.log("Convert button clicked");
          }}
        >
          Convert Amount
        </div>
      </div>
    </div>
  );
}

export default App;
