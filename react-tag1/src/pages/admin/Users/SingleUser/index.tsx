import {useParams} from "react-router";

const SingleUser =()=>{

    const {userId} = useParams();

    return <>
        <h2>single user data {userId}</h2>
    </>
}

export default SingleUser;