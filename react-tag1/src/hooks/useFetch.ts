import {useEffect, useState} from "react";

export function useFetch(url: string){

    /*store elements*/
    const [data, setData] = useState<unknown>(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    /*handle fetch*/
    useEffect(() =>{

        async function fetchData(){

            try{
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);

                }

                /*else ist nicht nötig, da nur ins if() gegangen wird, wenn response nicht OK ist*/
                const jsonData = await response.json();
                setData(jsonData);


            }catch(err){
                setError({msg: "fetch failed", err: err})

            }finally{
               setLoading(false);
            }
        }

        fetchData();

    },[])


    return {data, error, loading};
}