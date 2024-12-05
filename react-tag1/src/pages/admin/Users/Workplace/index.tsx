import {useParams} from "react-router";
import Map from "../../../../components/Map";

const Workplace =()=>{

    const params = useParams()

    const geoData = [
        {
            name: 'Berlin',
            lat: 52.52,
            lng: 13.405,
            title: 'Capital of Germany',
            description:
                'Berlin is known for its art scene, modern landmarks like the Berlin Wall, and vibrant culture.',
            status: "red"
        },
        {
            name: 'Munich',
            lat: 48.1351,
            lng: 11.582,
            title: 'Bavaria’s Capital',
            description:
                'Munich is famous for its annual Oktoberfest celebration and beer halls.',
        },
        {
            name: 'Hamburg',
            lat: 53.5511,
            lng: 9.9937,
            title: 'Port City',
            description:
                'Hamburg is a major port city with a beautiful harbor and rich maritime history.',
        },
    ];


        return <><Map geoData={geoData}/></>
}

export default Workplace;