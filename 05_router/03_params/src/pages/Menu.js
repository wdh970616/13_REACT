import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getMenuList } from "../api/MenuAPI";
import MenuItem from "../components/MenuItem";
import menuStyle from "./Menu.module.css";

function Menu() {

    const outletStyle = {
        margin: 0,
        padding: 0,

        position: "fixed",
        top: 130,
        left: 0,

        textAlign: "center",

        height: "100%",
        minWidth: "100vw",

        overflow: "auto",

        // border: "1px solid red"
    };

    const menuHeaderStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        height: 100,

        // border: "1px solid red"
    };

    const navigate = useNavigate();

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    // Menu 컴포넌트가 마운트 되기 전에 데이터를 가져와서 state에 담기
    useEffect(
        () => {
            // 데이터를 가져오는 로직
            // console.log(getMenuList());

            // json형태로 파싱된 데이터는 table형태로 뽑을 수 있다.
            // table이 나오지 않으면 파싱이 제대로 안된 것
            // console.table(getMenuList());

            setMenuList(getMenuList());
        }
        , []
    );

    const onClickHandler = () => {
        // console.log(searchValue);

        navigate(`/menu/search?menuName=${searchValue}`);
    };

    return (
        <>
            <div style={outletStyle}>
                <div style={menuHeaderStyle}>
                    <h1>오지라퍼 메뉴</h1>
                    <input type="search" name="menuName" onChange={(e) => setSearchValue(e.target.value)} />
                    <button onClick={onClickHandler}>검색</button>
                </div>
                <div className={menuStyle.MenuBox}>
                    {/* 메뉴 컴포넌트를 반복해서 보여줄 예정 */}
                    {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
                </div>
            </div>
        </>
    );
}

export default Menu;