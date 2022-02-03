import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  Featured,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    
    {
      id: "Featured",
      title: "Featured",
    },
    {
      id: "web_design",
      title: "Web Design",
    },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
    
      case "Featured":
        setData(Featured);
        break;
      case "web_design":
        setData(webPortfolio);
        break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
      default:
        setData(Featured);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href={d.href}>
            <img
              src={d.img}
              onClick={d.href}
              alt=""
            />
            </a>
            <h3>{d.title}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
}
