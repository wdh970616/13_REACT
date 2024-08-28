import menus from "../data/menu-detail.json";

// 전체 메뉴 리스트를 반환하는 메소드
export function getMenuList() {
    // json으로 파싱된 데이터를 반환
    return menus;
}