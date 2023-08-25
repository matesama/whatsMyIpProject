

const CountryFlag = ({countryCode}) => {

    return <div>
        <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} />
    </div>;
}

export default CountryFlag;