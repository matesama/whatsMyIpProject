import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import Map from "./components/Map";
import CountryInformation from './components/CountryInformation';
import CountryFlag from './components/countryFlag';
import Time from "./components/Time";

function App() {
  const [address, setAddress] = useState(""); 
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [countryCode, setCountryCode] = useState("");

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
      setCountryCode(getIp.data.location.country);

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
        <CountryInformation countryCode={countryCode}/>
        <CountryFlag countryCode={countryCode}/>
        <Time />
      </div>
  
    </>
  )
}

export default App
