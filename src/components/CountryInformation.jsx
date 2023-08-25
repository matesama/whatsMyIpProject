import {useState, useEffect} from "react";
import axios from "axios";

const CountryInformation =  ({countryCode}) => {
    const [countryData, setCountryData] = useState([]);
    
    
    const fetchCountryData = async () => {
        try {
            const key = import.meta.env.VITE_COUNTRYLAYER_KEY;
            const getCountryInfos = await axios.get(`http://api.countrylayer.com/v2/all?access_key=${key}`);
            console.log(getCountryInfos);

            if(!getCountryInfos) throw new Error(`Fetching data failed, due to ${getCountryInfos.status}`);
            const response = getCountryInfos.data;
            setCountryData(response);
            console.log(countryCode);

        } catch(error) {
            console.log(error.message);
        }
    }
    useEffect(()=> {
        fetchCountryData();
      }, [])


        //use filter to search for alpha2Code the two letter country code passed as prop {country}
      const countryInformation = countryData.filter((country)=> {
        return country.alpha2Code === countryCode;
        } 
        );
        const specificCountryInformation = countryInformation[0]; 
       // console.log(specificCountryInformation);

   //Ask: Why does it break it down so often?

    return <div>
        {/*<h2>Country Information:</h2>
        <p>Name: {specificCountryInformation.name}</p>
        <p>Region: {specificCountryInformation.region}</p>
    <p>Capital: {specificCountryInformation.capital}</p>*/}
        
        </div>;

}

export default CountryInformation;