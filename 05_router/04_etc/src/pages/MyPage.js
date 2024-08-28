import { Navigate } from "react-router-dom";

function MyPage() {

    const isLogin = false;

    if (isLogin === false) {
        // 컴포넌트 내에서 권한이나 다른 특정 상황에 의해 다른 페이지를 이동하고 싶을 때 사용하는 Navigate 컴포넌트
        // - useNavigate와 같지만 함수형으로 사용할지 컴포넌트 형태로 사용할지에 따라 선택할 수 있다.
        return <Navigate to="/login" />
    } else {
        return (
            <>
                <h1>마이 페이지 본문</h1>
            </>
        )
    }
}

export default MyPage;