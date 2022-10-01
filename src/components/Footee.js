import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div style={{width: "100%", background: "#F5F5F5", height: "355px"}}>
                <div style={{width: "1200px", margin: "auto", marginTop: "75px"}}>
                    <div style={{display: "flex", justifyContent: "space-between", textAlign: "center", marginTop:"70px"}}>
                        <p className={"text__dark"}>НОВОСТИ</p>
                        <p className={"text__dark"}>ИНСТИТУТ</p>
                        <p className={"text__dark"}>НАПРАВЛЕНИЯ</p>
                        <p className={"text__dark"}>ФАКУЛЬТАТИВЫ</p>
                        <p className={"text__dark"}>НАУЧНАЯ ЖИЗНЬ</p>
                        <p className={"text__dark"}>КОНТАКТЫ</p>
                    </div>
                    <p style={{fontFamily:"Montserrat", fontSize:"18px", color:"#292929", fontWeight:"400", margin:"135px 0 0 0", textAlign:"center"}}>
                        Институт компьютерных наук и технологий © 2022 <br/>
                        614990, Пермь, ул. Букирева, 15, info@psu.ru <br/>
                        Посещая страницы Сайта, заполняя формы ввода данных, пользователь выражает своё согласие <br/>
                        с <span style={{color:"#2193FE", textDecoration:"underline"}}>Политикой конфиденциальности.</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;