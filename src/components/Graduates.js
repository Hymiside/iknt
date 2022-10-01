import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import g1 from "./files/g1.svg";
import g2 from "./files/g2.svg";
import g3 from "./files/g3.svg";
import g4 from "./files/g4.svg";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

class Graduates extends React.Component {
    handleDragStart = (e) => e.preventDefault();

    responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    items = [
        <img src={g1} alt="" onDragStart={this.handleDragStart} role="presentation" />,
        <img src={g2} alt="" onDragStart={this.handleDragStart} role="presentation" />,
        <img src={g3} alt="" onDragStart={this.handleDragStart} role="presentation" />,
        <img src={g4} alt="" onDragStart={this.handleDragStart} role="presentation" />,
        <img src={g1} alt="" onDragStart={this.handleDragStart} role="presentation" />,
        <img src={g2} alt="" onDragStart={this.handleDragStart} role="presentation" />,
        <img src={g3} alt="" onDragStart={this.handleDragStart} role="presentation" />,
        <img src={g4} alt="" onDragStart={this.handleDragStart} role="presentation" />,
    ];

    render() {
        return (
            <div style={{width: "100%", background: "#CF293D", height: "540px"}}>
                <div style={{width: "1200px", margin: "auto", marginTop: "120px"}}>
                    <p style={{fontFamily:"Montserrat", fontSize:"25px", color:"#fff", fontWeight:"700", padding:"40px 0 0 0", textAlign:"left"}}>Известные выпускники</p>
                    <div style={{margin:"40px 0 0 0"}}>
                        <AliceCarousel mouseTracking disableButtonsControls={true} items={this.items} responsive={this.responsive} infinite={true} controlsStrategy="alternate" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Graduates;