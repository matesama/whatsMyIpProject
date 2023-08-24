import {useState, useEffect} from "react";
import axios from "axios";

const CountryInformation =  () => {
    const [countryData, setCountryData] = useState("");
    
    const fetchCountryData = async () => {
        try {
            const key = import.meta.env.VITE_COUNTRYLAYER_KEY;
            const getCountryInfos = await axios.get(`http://api.countrylayer.com/v2/all?access_key=${key}`);
            console.log(getCountryInfos);

            if(!getCountryInfos) throw new Error(`Fetching data failed, due to ${getCountryInfos.status}`);
            const response = getCountryInfos;
            setCountryData(response);
      

        } catch(error) {
            console.log(error.message);
        }
    }
    useEffect(()=> {
        fetchCountryData();
      }, [])
    

      //use filter to search for alpha2Code the two letter country code!

    return <div></div>;

}

export default CountryInformation;