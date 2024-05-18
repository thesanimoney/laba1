import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";

function Layout() {
    return <>
        <Header></Header>
        <Outlet></Outlet>
    </>
}

export default Layout;