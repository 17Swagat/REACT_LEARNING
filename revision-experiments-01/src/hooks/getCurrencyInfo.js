import { useEffect, useState } from "react";

function useCurrencyInfo(currency_code){
    console.log('fetchingData')
    const [data, setData] = useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency_code}.json`
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>(setData(res[currency_code])))
            .catch(()=>setData({}))
    }, [currency_code])
    return data;
}
export default useCurrencyInfo;