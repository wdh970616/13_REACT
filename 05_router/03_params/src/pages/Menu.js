import { useEffect, useState } from "react";
import { getMenuList } from "../api/MenuAPI";
import MenuItem from "../components/MenuItem";
import boxStyle from "./Menu.module.css";

function Menu() {

    const outletStyle = {
        margin: 0,
        padding: 0,

        position: "fixed",
        top: "20vh",
        left: 0,

        overflow: "auto",

        height: "80vh",
        width: "100vw",
    }

    const [menuList, setMenuList] = useState([]);

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
    )

    return (
        <>
            <div style={outletStyle}>
                <h1>오지라퍼 메뉴</h1>
                <div className={boxStyle.MenuBox}>
                    {/* 메뉴 컴포넌트를 반복해서 보여줄 예정 */}
                    {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}></MenuItem>)}
                </div>
            </div>
        </>
    )
}

export default Menu;