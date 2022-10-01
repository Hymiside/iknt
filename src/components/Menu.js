import React from "react";


class Header extends React.Component {
    render() {
        return (
                <div style={{width: "100%", background: "#CF293D", height: "60px"}}>
                    <div style={{width: "1200px", margin: "auto", marginTop: "30px"}}>
                        <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                            <p className={"text"}>НОВОСТИ</p>
                            <p className={"text"}>ИНСТИТУТ</p>
                            <p className={"text"}>НАПРАВЛЕНИЯ</p>
                            <p className={"text"}>ФАКУЛЬТАТИВЫ</p>
                            <p className={"text"}>НАУЧНАЯ ЖИЗНЬ</p>
                            <p className={"text"}>КОНТАКТЫ</p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Header;