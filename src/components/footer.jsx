import "../css/Footer.css";
import { useState } from "react";

function Footer() {
return (
    <>
        <div className="footer">
            
            <div className="footerContent">
                <hr className="footerHr"></hr>
                <div className="footertextcont">
                    <div className="footT1">
                        <div className="footheading">Home</div>
                        <div className="foottext">Subscriber</div>
                        <div className="foottext">Service Agreement</div>
                    </div>
                    <div className="footT2">
                        <div className="footheading">Articles</div>
                        <div className="foottext">Interviews</div>
                        <div className="foottext">People Spotting</div>
                        <div className="foottext">Points of View</div>
                    </div>
                    <div className="footT3">
                        <div className="footheading">Showcase</div>
                        <div className="foottext">Digital</div>
                        <div className="foottext">TV</div>
                        <div className="foottext">Print</div>
                        <div className="foottext">OOH</div>
                    </div>
                    <div className="footT4">
                        <div className="footheading">Media</div>
                        <div className="foottext">Digital</div>
                        <div className="foottext">Television</div>
                        <div className="foottext">Print</div>
                        <div className="foottext">OOH</div>
                    </div>
                    <div className="footT5">
                        <div className="footheading">Events</div>
                        <div className="foottext">Vdonxt 2019</div>
                        <div className="foottext">Digi Pub</div>
                        <div className="foottext">Foxglove</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
);
}
export default Footer;