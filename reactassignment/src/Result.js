import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";


function LandingPageButton() {
    return(
        <>
       
    
    <Link to="/Home" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px", "color": "beige"}}>
                Go To Home
            </span>
        </button>
    </Link>
    </>
    );
    
    
    
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "90px"}}>
            The Interesting Facts of universe are !!!
        </div>
        
        <div style={{"font-size": "36px"}}>
            
        Astronomers estimate there are about 100 thousand million stars in the Milky Way alone. 
        Outside that, there are millions upon millions of other galaxies also!<br/>
        There are about 200 billion galaxies in an universe.
        </div>
        <br />
        <LandingPageButton />
    </div>
}

function LandingFrame() {
    const style = {
        "background-image": `url("https://img.freepik.com/free-vector/sparkles-bokeh-background-with-text-space_1017-31522.jpg?t=st=1655368859~exp=1655369459~hmac=b5d2261f0ed530fc817287e3002d58e60ddaa625bab4d2c2ee14847a407be243&w=740")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        
        <LandingFrameMessage/>
    </div>
}
function Result() {
    return <div>
        <LandingFrame />
    </div>
}
export default Result;