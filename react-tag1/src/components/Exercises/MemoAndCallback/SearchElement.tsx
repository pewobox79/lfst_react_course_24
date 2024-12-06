import {memo} from "react";

const SearchElement =({onChange})=>{
console.log("search element render")
    return <>

    <input type={"text"} placeholder={"search users..."} onChange={(e)=>onChange(e.target.value)}/></>
}

export default memo(SearchElement)