import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const actived = {
        backgroundColor: 'black',
        color: 'white'
    }

    return (
        <div>
            <ul>
                {/* <li>HOME</li>
                <li>MYPAGE</li>
                <li>LOGIN</li> */}

                {/* <li><a href={"/"}>HOME</a></li>
                <li><a href={"/mypage"}>MYPAGE</a></li>
                <li><a href={"/login"}>LOGIN</a></li> */}

                {/* <li><Link to="/">HOME</Link></li>
                <li><Link to="/mypage">MYPAGE</Link></li>
                <li><Link to="/login">LOGIN</Link></li> */}

                <li><NavLink to="/" style={({ isActive }) => isActive ? actived : undefined}>HOME</NavLink></li>
                <li><NavLink to="/mypage" style={({ isActive }) => isActive ? actived : undefined}>MYPAGE</NavLink></li>
                <li><NavLink to="/login" style={({ isActive }) => isActive ? actived : undefined}>LOGIN</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;