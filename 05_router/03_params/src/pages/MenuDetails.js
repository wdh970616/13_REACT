import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuAPI";

function MenuDetails() {

    const outletStyle = {
        margin: 0,
        padding: 0,

        position: "fixed",
        top: "20vh",
        left: 0,

        height: "80vh",
        width: "100vw",
    };

    // menuCode에 따라 유동적으로 처리할 수 있다.
    // console.log(menuCode);
    const { menuCode } = useParams();
    const [menu, setMenu] = useState({
        // 개발할 때 useState를 빈 객체로 초기화해도 되지만 들어올 값들을 임시형태로 써놓으면 도움이 된다.
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail: {}
    });

    useEffect(() => {
        setMenu(getMenuDetail(menuCode));
    }, []
    );

    return (
        <>
            <div style={outletStyle}>
                <img src={menu.detail.image} style={{ maxHeight: 500, maxWidth: 500 }} />
                <h2>메뉴 상세 설명</h2>
                <h3>메뉴 이름 : {menu.menuName}</h3>
                <h3>메뉴 가격 : {menu.menuPrice}</h3>
                <h3>메뉴 종류 : {menu.categoryName}</h3>
                <h3>메뉴 설명 : {menu.detail.description}</h3>
            </div>
        </>
    );
}

export default MenuDetails;