import {Outlet} from "react-router";

const DashBoardLayout=()=>{

    return <>
        <h2>Dashboard layout</h2>

        <main>
            <Outlet/>
        </main>
    </>
}

export default DashBoardLayout;