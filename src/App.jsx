import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import Map from "./components/Map";
import CountryInformation from './components/CountryInformation';

function App() {
  const [address, setAddress] = useState(""); 
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const fetchIp = async () => {
    try {
      const key = import.meta.env.VITE_KEY;
      
      const getIp = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${key}`);
     console.log(getIp);

      if(!getIp) throw new Error(`Fetching data failed, due to ${getIp.status}`);
      const response = getIp.data.ip;
      setAddress(response);
      setLat(getIp.data.location.lat);
      setLng(getIp.data.location.lng);

    } catch(error) {
      console.log(error.message);
    }
    
  }
  useEffect(()=> {
    fetchIp();
  }, [])
  

  return (
    <>
      <div>
        <h1>What´s my Ip?</h1>

        <p>My Ip address is: {address}</p>
        <Map lat={lat} lng={lng}  />
        <CountryInformation />
      </div>
  
    </>
  )
}

export default App
