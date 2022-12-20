import React from "react";


const footerStyle = {
    position: "absolute",
    textAlign: "center",
    bottom: "0",
    width: "100%",
    height: "2.5rem"
};

const pStyle = {
    color : "#ccc"
}

function Footer(props){
    return <footer style={footerStyle}>
        <p style={pStyle}>
            Made with {props.emoji} by {props.name},
        </p>
        <p>
            Copywrite, {props.year}
        </p>
    </footer>
}


export default Footer;