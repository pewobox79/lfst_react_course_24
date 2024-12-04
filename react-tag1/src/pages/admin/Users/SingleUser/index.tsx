import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getSingleUser} from "../../../../utils/userHelper.ts";
import Loader from "../../../../components/globals/Loader.tsx";

const SingleUser = () => {

    const [response, setResponse] = useState<unknown>();
    const [loading, setLoading] = useState(false);

    const {userId} = useParams();

    useEffect(() => {
        setLoading(true)
        getSingleUser(userId as string).then(data => {
            setResponse(data)
            setLoading(false)
        });
    }, [userId]);

    return <>

        { response?.error && <p>error happpend</p> }
        {loading ? <Loader/>: <><h3>{ response?.data?.name }</h3>
            <p>Address: { response?.data.address.city }</p></>}
    </>
}

export default SingleUser;