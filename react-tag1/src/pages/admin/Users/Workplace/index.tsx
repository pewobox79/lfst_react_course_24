import {useParams} from "react-router";

const Workplace =()=>{

    const params = useParams()
    console.log(params)

    return <h2>workplace</h2>
}

export default Workplace;