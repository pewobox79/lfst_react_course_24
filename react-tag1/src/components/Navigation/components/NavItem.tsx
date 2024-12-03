import {NavItemTypes} from "../../../../types/NavTypes.ts";
import {useState} from "react";
import styles from "../../../styles/Navigation.module.css"
import {NavLink} from "react-router";

const NavItem = ({title, href}: NavItemTypes) => {

    const [isRed, setIsRed] = useState(false);

    // state update erst nach dem ersten re-Render
    function handleChange() {
        setIsRed(!isRed);
        console.log("state in function", isRed)
    }


    const mylistStyle = `${styles.listItem} ${isRed ? styles.colorStyle: ""}`

    return <li onClick={ handleChange } className={mylistStyle}>
        <NavLink to={href} className={({isActive})=> isActive ? styles.isActiveLink : ""} >{title}</NavLink>
        {/*<a href={ href } >{ title }</a>*/}
    </li>
}

export default NavItem