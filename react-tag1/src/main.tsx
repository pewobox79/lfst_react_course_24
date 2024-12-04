import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/index.css'
import './styles/App.css'
import Homepage from "./pages/Homepage.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import DashBoardLayout from "./layouts/DashBoardLayout.tsx";
import SingleUser from "./pages/admin/Users/SingleUser";
import Workplace from "./pages/admin/Users/Workplace";
import Users from "./pages/admin/Users";
import LoginPage from "./pages/LoginPage.tsx";
import ContextLayout from "./layouts/ContextLayout.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<ContextLayout/>}>

                    <Route path={ "/" } element={ <MainLayout/> }>
                        <Route index element={ <Homepage/> }/>
                        <Route path={ "aboutme" } element={ <AboutUsPage/> }/>
                        <Route path={ "login" } element={ <LoginPage/> }/>
                        <Route path={ "*" } element={ <h1>wild card</h1> }/>
                    </Route>

                    <Route path={ "admin" } element={ <DashBoardLayout/> }>
                        <Route index element={ <h2>Dashboard</h2> }/>
                        <Route path={ "users" }>
                            <Route index element={ <Users/> }/>
                            <Route path={ ":userId" }>
                                <Route index element={ <SingleUser/> }/>
                                <Route path={ ":workplace" } element={ <Workplace/> }/>
                            </Route>
                        </Route>
                    </Route>

                </Route>
            </Routes>


        </BrowserRouter>
    </StrictMode>,
)
