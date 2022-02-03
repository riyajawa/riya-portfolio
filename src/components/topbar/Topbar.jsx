import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";



export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <div className="social-media-div">
      <a
         href="https://github.com/riyajawa"
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        
        
        
        <span></span>
      </a>
      {/* <a
        // href={socialMediaLinks.gitlab}
        className="icon-button gitlab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a> */}
      <a
        href="https://www.linkedin.com/in/riya-jawa/"
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
         href="mailto:riyajawa2@gmail.com"
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a
         href="https://twitter.com/riyajawa2"
        className="icon-button twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      <a
         href="https://www.instagram.com/riya_jawa_/"
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
    </div>
          {/* <div className="logo">
           <img src="assets/signature.png" className="image" >
           </img>
           </div> */}
           {/* <div href="#intro" className="logo">
            RIYA
          </div> */}
           {/*
          <div className="itemContainer">
            <Person className="icon" />
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>safak@genius.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
