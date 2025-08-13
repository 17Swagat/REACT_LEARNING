import UserContext from "../context/UserContext";
import { useState, useContext } from "react";

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        setUser({userName, password})
    }

  return (
    <div className="text-white flex flex-col items-center">
      <h2 className="text-4xl mb-2 underline">Login</h2>
      <div className="h-2"></div>
      <input 
        type="text" 
        value={userName} 
        onChange={(e)=> {setUserName(e.target.value)}} 
        className="border-2 text-3xl p-2"
        placeholder="Username"/>
      <div className="h-3"></div>
      <input 
        type="text" 
        value={password} 
        onChange={(e)=>{setPassword(e.target.value)}} 
        className="border-2 text-3xl p-2"
        placeholder="Password"/>
      
      <button 
        onClick={handleSubmit} 
        className="bg-blue-800 p-5 mt-2 rounded-2xl text-2xl">
          Submit
      </button>
    </div>
  );
}
