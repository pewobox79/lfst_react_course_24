import NavItem from "./components/NavItem.tsx";
import {navStore} from "../../store/navStore.ts";

const Navigation = () => {


    const NavList = navStore.map((item: { href: string, title: string, id: string }) => {

        return <NavItem key={ item.id }
                        title={ item.title }
                        href={ item.href }/>

    })


    return <nav>
        <ul>
            { NavList }
        </ul>
    </nav>
}

export default Navigation