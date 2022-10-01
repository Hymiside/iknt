import React from "react";
import photo from "./files/photo1.png";

class NewsList extends React.Component {
    render() {
        return (
            <div style={{width: "1200px", margin: "auto", marginTop: "70px"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{width: "340px", textAlign: "left"}}>
                        <img src={photo} alt="Новость"/>
                        <p style={{fontFamily: "Playfair Display", fontWeight: "500", fontSize: "24px", margin: "20px 0 0 0"}}>В стартап студентов ИТ–института инвестировала компания Google более 500 миллионов долларов</p>
                        <p className={"time"}>10:32</p>
                    </div>

                    <div style={{width: "386px", textAlign: "left"}}>
                        <p className={"news__text"}>Моя природа – заниматься разработкой: молодой ученый ПГНИУ рассказал, что с детства хотел стать разработчиком</p>
                        <p className={"time"}>10:32</p>
                        <div style={{height: "1px", background: "#B3B1B3", margin: "25px 0"}}></div>

                        <p className={"news__text"}>В Пермском университете состоятся презентации книг ученых механико-математического факультета</p>
                        <p className={"time"}>12:52</p>
                        <div style={{height: "1px", background: "#B3B1B3", margin: "25px 0"}}></div>

                        <p className={"news__text"}>Профессор Пермского университета стала победителем конкурса "Золотые имена высшей школы"</p>
                        <p className={"time"}>14:01</p>

                    </div>

                    <div style={{width: "386px", textAlign: "left"}}>
                        <p className={"news__text"}>Разработки ученых ПГНИУ представлены на Петербургском международном газовом форуме</p>
                        <p className={"time"}>16:18</p>
                        <div style={{height: "1px", background: "#B3B1B3", margin: "25px 0"}}></div>

                        <p className={"news__text"}>"Цифровая долина Прикамья" предлагает стипендии лучшим студентам IT-направлений ПГНИУ</p>
                        <p className={"time"}>03:22</p>
                        <div style={{height: "1px", background: "#B3B1B3", margin: "25px 0"}}></div>

                        <p className={"news__text"}>Семинар "Национальная безопасность" прошел на площадке Пермского университета</p>
                        <p className={"time"}>19:57</p>

                    </div>
                </div>

                <div style={{display:"flex", justifyContent: "space-between", alignItems: "center", margin:"30px 0 0 0"}}>
                    <div style={{height: "1px", background: "#B3B1B3", width:"497px"}}></div>
                    <button style={{
                        background:"none", width:"157px", height:"43px", border:"1px solid #CF293D", borderRadius:"3px", fontFamily:"Montserrat", fontWeight:"400", fontSize:"18px", color: "#CF293D"
                    }}>Все новости</button>
                    <div style={{height: "1px", background: "#B3B1B3", width:"497px"}}></div>
                </div>
            </div>
        )
    }
}

export default NewsList;