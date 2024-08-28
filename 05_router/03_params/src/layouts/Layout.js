import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {

    const outletStyle = {
        margin: 0,
        padding: 0,

        position: "fixed",
        top: "20vh",
        left: 0,

        height: "80vh",
        width: "100vw",
    }

    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout;