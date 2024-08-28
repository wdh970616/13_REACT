import menus from "../data/menu-detail.json";

// 전체 메뉴 리스트를 반환하는 메소드
export function getMenuList() {
    // json으로 파싱된 데이터를 반환
    return menus;
}

// MenuDetails에서 넘겨준 메뉴코드와 일치하는 메뉴 객체 반환
export function getMenuDetail(menuCode) {
    // console.log("MenuAPI : MenuDetails에서 넘어온 menuCode : ", menuCode);
    // console.log("MenuAPI : MenuDetails에서 넘어온 menuCode 형태 : ", typeof menuCode);

    // menus 배열에서 filter의 콜백함수가 true를 반환하게 하는 요소만을 가지고 다시 반환
    // 이 때 파싱된 데잍터에서 꺼낸 객체의 menuCode는 숫자이므로 PathVariable로 넘겨받은 값(문자열)을 숫자형으로 형변환 필요
    console.log(menus.filter(menu => menu.menuCode === parseInt(menuCode))[0]);

    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}

export function searchMenu(searchMenuName) {
    console.log("MenuAPI : 전달된 검색어(searcMenuName) : ", searchMenuName);

    // match 함수는 포함 여부에 따라 인수값이 포함되어 있으면 객체를 반환
    // console.log('abc'.match('d'));

    // console.log(menus.filter(menu => menu.menuName.match(searchMenuName)));

    return menus.filter(menu => menu.menuName.match(searchMenuName));
}