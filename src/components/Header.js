import React from "react";
import logo from "./files/logo.png";
import picture from "./files/picturehead.png"

class Header extends React.Component {
    render() {
        return (
            <div style={{width: "1200px", margin: "auto", paddingTop: "20px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <img src={logo} alt="Логотип"/>
                    <img src={picture} alt="Какая-то картинка"/>
                </div>
            </div>
        )
    }
}

export default Header;