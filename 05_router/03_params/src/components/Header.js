function Header() {

    const headerStyle = {
        // border: "1px solid red",

        margin: 0,
        padding: 0,

        position: "fixed",
        top: 0,
        left: 0,

        height: 100,
        minWidth: "100vw",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "black",
        color: "whitesmoke",

        // border: "1px solid red"
    }

    return (
        <div style={headerStyle}>
            <h1 className="title">레스토랑 오지라퍼</h1>
        </div>
    )
}

export default Header;