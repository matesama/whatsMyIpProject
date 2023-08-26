import {DateTime} from "luxon";
import {useState, useEffect} from "react";

const Time = (countryCode) => {
    const [localClock, setLocalClock] = useState("")
    const [colClock, setColClock] = useState("")

//LocalTime & LocalDate:
    const localTime = DateTime.local();
    const clock = localTime.toLocaleString({hour: 'numeric', minute: 'numeric', second: 'numeric'})
    
    const localDate = DateTime.now().toFormat('MM-dd-yyyy')
    console.log(localDate)
    console.log(clock);

    //Time in an other place with another Timezone:
    let zone = "America/Bogota";
    let dateTimes = DateTime.fromObject({}, {zone});
    //console.log("Current Date", dateTimes.toISO());
    const clockOtherTimezone = dateTimes.toLocaleString({hour: 'numeric', minute: 'numeric', second: 'numeric'})
    console.log(clockOtherTimezone);

    const tickTock = () => {
        setLocalClock(localTime.toLocaleString({hour: 'numeric', minute: 'numeric', second: 'numeric'}));
        setColClock(clockOtherTimezone);
    }

    useEffect(() => {
        const timer = setInterval(tickTock, 1000);
        return() => clearInterval(timer)
    }, [])
    
    useEffect(() => {
        console.log("localClock updated", localClock)
    }, [localClock])
    
    useEffect(() => {
        const timer = setInterval(tickTock, 1000);
        return() => clearInterval(timer)
    }, [])
    
    useEffect(() => {
        console.log("localClock updated", localClock)
        console.log("colClock updated", colClock)
    }, [localClock, colClock])
    







    return( <div>
        <p>Date in {countryCode.countryCode}: {localDate}</p>
        <p>Time in {countryCode.countryCode}: {localClock}</p>
        <img src={`https://flagsapi.com/CO/flat/64.png`} />
        <p>Time in CO: {colClock}</p>
        </div>
    )
}


export default Time;