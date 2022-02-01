import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import {Button} from 'react-bootstrap';


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Student", "Competitive programmer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/memoji.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Riya</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <br/>
          <br/>
        
        </div>
        <div className="buttons">
          <div className="button" >
            <a href="assets/myProfile.jpeg">See my resume</a></div>
            
            <div className="button2" >
            <a href="assets/myProfile.jpeg">My linkedin</a></div>
            </div>
        
        
       
      </div><div>
   
      </div>
    </div>
  );
}
