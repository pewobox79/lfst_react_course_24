import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {Outlet} from "react-router";

const MainLayout = () => {

    return <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}

export default MainLayout