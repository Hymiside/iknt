import React from "react";
import photo2 from "./files/photo2.png"

class News extends React.Component {
    render() {
        return (
            <div style={{width:"1200px", margin: "auto"}}>
                <div style={{margin: "115px 0 0 0", textAlign: "left"}}>
                    <p style={{width:"926px"}}><span style={{fontFamily:"Playfair Display", fontWeight:"700", fontSize:"40px"}}>«Почему перевернутая программа лучше старой?» </span>
                    <span style={{fontFamily:"Montserrat", fontWeight:"400", fontSize:"35px"}}>В конце апреля Пермский университет объявил о создании ИТ-института.</span></p>
                    <p style={{fontFamily:"Montserrat", fontWeight:"400", fontSize:"18px", color:"#2193FE", margin:"40px 0 0 0"}}>Владислав Максимов</p>
                    <p style={{fontFamily:"Montserrat", fontWeight:"400", fontSize:"15px", color:"#969696", margin:"5px 0 0 0"}}>Редакция Mechmat Community</p>
                    <img style={{margin:"30px 0 0 0"}} src={photo2} alt="Новость"/>
                    <p style={{fontFamily:"Montserrat", fontWeight:"400", fontSize:"15px", color:"#969696", margin:"10px 0 0 0"}}>Фото: официальный сайт ПГНИУ</p>
                </div>
            </div>
        )
    }
}

export default News;