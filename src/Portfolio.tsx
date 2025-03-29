import portfolio_photo from "./assets/dscdsc 1.svg";
import portfolio_photo2 from "./assets/Frame_42.svg";
import portfolio_photo3 from "./assets/5175975 1.png";
import portfolio_photo4 from "./assets/Frame_43_ 3.svg";
import portfolio_photo5 from "./assets/Frame_43_1.svg";
import portfolio_photo6 from "./assets/Frame_43_2.svg";
import portfolio_photo7 from "./assets/Group.png";
import portfolio_photo8 from "./assets/Frame45.svg";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <div className="continer23">
        <div className="team_texts">
          <h3 className="team_title3">WORS</h3>
          <h2 className="team_title2">Portfolio</h2>
          <p className="team_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="continer2">
        <div className="grid_portfolio">
          <div className="portfolio_img_box1">
            <img className="portfolio_img" src={portfolio_photo7} alt="pic" />
          </div>
          <div className="portfolio_img_box">
            <img className="portfolio_img" src={portfolio_photo2} alt="pic" />
          </div>
          <div className="portfolio_img_box">
            <img className="portfolio_img" src={portfolio_photo5} alt="pic" />
          </div>
          <div className="portfolio_img_box">
            <img className="portfolio_img" src={portfolio_photo6} alt="pic" />
          </div>
          <div className="portfolio_img_box">
            <img className="portfolio_img" src={portfolio_photo8} alt="pic" />
          </div>
          <div className="portfolio_img_box">
            <img className="portfolio_img" src={portfolio_photo4} alt="pic" />
          </div>
          <div className="portfolio_img_box">
            <img className="portfolio_img" src={portfolio_photo} alt="pic" />
          </div>
          <div className="portfolio_img_box">
            <img className="portfolio_img" src={portfolio_photo3} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
