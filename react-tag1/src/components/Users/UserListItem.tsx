import styles from '../../styles/Users.module.css'
import {Link, Navigate, redirect} from "react-router";

const UserListItem =(props:{name: string, phone:string, website: string, id:string})=>{

    /*false concept in react router context*/
    function redirect(){

        window.location.href = `/admin/users/${props.id}`
    }

    return <Link to={`/admin/users/${props.id}`}>
        <div className={styles.userItemWrapper} >
        <div className={styles.userItemInner}>
            <h3>{ props.name }</h3>
            <p>Phone: { props.phone }</p>
            <p>Website: { props.website }</p>
        </div>
    </div>
    </Link>
}

export default UserListItem;