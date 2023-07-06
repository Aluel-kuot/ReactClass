import React from "react";
import './style.css'
import Home from "../Home/index2";


function Introduction(){
    return(
        <div className="home">
            <h1 className="heading">What I have learned about ReactJS </h1>
            <p>It has reusable components</p>
            <p>The writing format is JSX</p>
            <p>It is fast</p>
<h1 className="tech">Explore The Tech World</h1>
<img src="/images/aluel.jpg" id="img1" alt="picture"/>
<img src="/images/tech4.jpg" id="img2" alt="picture"/>
<img src="/images/download.jpeg" id="img3" alt="picture"/><br></br>

<button className="button">Start learning</button>
        </div>

    );
};
export default Introduction;
