import React from "react";


const headerStyle = {
    backgroundColor : "#f5ba13",
    margin : "auto -16px",
    padding : "16px 32px",
    boxShadow : "0 0 10px rgba(0,0,0,0.3)"
};

const h1Style ={
    color : "#fff",
    fontFamily : "McLaren, cursive",
    fontWeight: "200"
}

function Header(){
    return <header style={headerStyle}>
    <h1 style={h1Style}>
    Keeper App
    </h1>
    </header>
};


export default Header;
