import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [address, setAddress] = useState(""); 

  const fetchIp = async () => {
    try {
      const key = import.meta.env.VITE_KEY;
      
      const getIp = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${key}`);
     

      if(!getIp) throw new Error(`Fetching data failed, due to ${getIp.status}`);
      const response = getIp.data.ip;
      setAddress(response);

    } catch(error) {
      console.log(error.message);
    }
    
  }
  fetchIp();

  return (
    <>
      <div>
        <p>{address}</p>
      </div>
  
    </>
  )
}

export default App
