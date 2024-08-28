import { NavLink } from "react-router-dom";

function Navbar() {

    const navbarStyle = {
        margin: 0,
        padding: 0,

        position: "fixed",
        top: 100,
        left: 0,

        height: 30,
        minWidth: "100vw",

        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    }

    return (
            <ul style={navbarStyle}>
                <li><NavLink to="/">홈페이지</NavLink></li>
                <li><NavLink to="/about">소개</NavLink></li>
                <li><NavLink to="/menu">메뉴</NavLink></li>
            </ul>
    )
}

export default Navbar;