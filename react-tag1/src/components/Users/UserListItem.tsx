import styles from '../../styles/Users.module.css'

const UserListItem =(props:{name: string, phone:string, website: string})=>{

    return <div className={styles.userItemWrapper}>
        <div className={styles.userItemInner}>
            <h3>{ props.name }</h3>
            <p>Phone: { props.phone }</p>
            <p>Website: { props.website }</p>
        </div>
    </div>
}

export default UserListItem;