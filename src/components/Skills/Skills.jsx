import "./skills.scss";

export default function Skills() {
  const data = [
    {
      id: 1,
      titles:"Web developing",
      name: "React",
      title: "HTML,CSS,JS,Bootstrap,NodeJs",
     
      desc:
        "For frontend I use React , expert in HTML ,CSS ,JS and bootstrap. For Backend I am currently learning Node js by making various projects.For mobile development I uses flutter.",
    },
    {
      id: 2,
      titles:"Programming languages",
      name: "JAVA",
      title: "C,C++,Python",
     
      desc:
        "In programming languages I know C ,C++ ,JAVA and some basics of Python. For solving competitive questions I mainly uses Java. ",
      featured: true,
    },
    {
      id: 3,
      titles:"Graphics software",
      name: "Adobe Illustrator",
      title: "Adobe XD,Figma",
     
      desc:
        "I love making UI designs for which i use Adobe Xd, Figma and Adobe illustrator.",
    },
    
  ];
  return (
    <div className="skills" id="skills">
      <h1>SKILLS</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <h2>{d.titles}</h2>
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              {/* <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" /> */}
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
