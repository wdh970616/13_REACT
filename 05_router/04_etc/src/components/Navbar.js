import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <ul>
                <li><NavLink to="/">메인</NavLink></li>
                <li><NavLink to="/login">로그인</NavLink></li>
                <li><NavLink to="/mypage">마이페이지</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar;