import "./about.css";


const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="assets/myProfile.jpeg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a frontend developer from India currently pursuing  Computer science engineer from Chitkara University,Punjab.
        </p>
        <p className="a-desc">
        Designer and developer devoted to crafting beautiful web experiences focused on simplicity and purpose
I am passionate about building excellent software that improves the lives of those around me. I specialise in react.
I love combining the worlds of logic and creative design to make eye catching , accessible, and user friendly websites applications.
Technology leads, Society follows .
The move towards increasing inclusivity and diversity in the industry through representation is of importance to me .
I am excited to make the leap and continue refining my skills .
        </p>
        
      </div>
    </div>
  );
};

export default About;
