import {DateTime} from "luxon";

const Time = () => {

    const now = DateTime.now();
    DateTime.now().reconfigure({ locale: "fr" }).locale;
    console.log(now)
    return <div>
        <p></p>
        </div>;
}


export default Time;