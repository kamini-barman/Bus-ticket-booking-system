import React from "react";
import { Link } from "react-router-dom";

function LandingPageButton() {
    return(
        <>
        <Link to="/Register" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Register!
            </span>
        </button>
    </Link>
    
    
    <Link to="/Login" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                 Login!
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
        
        <div style={{"font-size": "96px"}}>
            Hello !!
            
        </div>
        <div style={{"font-size": "36px"}}>
            Do You Know??
            
        </div>
        
        <div style={{"font-size": "36px"}}>
             
            How Many Stars are there in our galaxy? <br/>
            How Many Galaxies are there in the universe?<br/>
            To Find out Register or login!!
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
function Home() {
    return <div>
        <LandingFrame />
    </div>
}
export default Home;