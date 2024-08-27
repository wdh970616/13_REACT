function Header() {
    const headerStyle = {
        // border: "1px solid red",

        margin: 0,
        padding: 0,

        position: "absolute",
        top: 0,
        left: 0,

        maxHeight: "10vw",
        minWidth: "100vw",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "black",
        color: "whitesmoke",
    }

    return (
        <div style={headerStyle}>
            <h1 className="title">레스토랑 오지라퍼</h1>
        </div>
    )
}

export default Header;