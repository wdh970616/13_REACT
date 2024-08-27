import { NavLink } from "react-router-dom"

function Navbar() {

    const navbarStyle = {
        margin: 0,
        padding: 0,

        position: "relative",
    }

    return (
        <div style={navbarStyle}>
            <ul>
                <li><NavLink to="/">홈페이지</NavLink></li>
                <li><NavLink to="/about">소개</NavLink></li>
                <li><NavLink to="/menu">메뉴</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;