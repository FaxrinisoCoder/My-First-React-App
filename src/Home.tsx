import home_photo from "./assets/Group_2.svg";
import home_flexs_photo from "./assets/Group_aa.png";
import home_flexs_photo2 from "./assets/Group_5.png";
import home_minbox from "./assets/Mask_group.png";
import home_minbox2 from "./assets/Mask_group2.png";
import home_minbox3 from "./assets/Mask_group_1.png";
import home_minbox4 from "./assets/Group_21.png";
import brand_logos from './assets/XMLID_1_.svg'
import brand_logos2 from './assets/XMLID_2.svg'
import brand_logos3 from './assets/XMLID_24_.svg'
import brand_logos4 from './assets/XMLID_3.svg'
import brand_logos5 from './assets/Group_1.svg'
import './Home.css'
const Home = () => {
  return (
    <div className="continer21">
      <div className="home_box">
        <div className="home_box_left">
          <h2 className="home_title2">WELCOME</h2>
          <h1 className="home_title">Lorem ipsum dolor sit amet consectetur</h1>
          <p className="home_box_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <button className="home_box_btn">Explore</button>
        </div>
        <div className="home_box_right">
          <img className="home_box_img" src={home_photo} alt="pic" />
        </div>
      </div>
      <div className="continer2">
        <div className="team_texts">
          <h3 className="team_title3">PARTNERS</h3>
          <h2 className="team_title2">Lorem Ipsum Dolor</h2>
          <p className="team_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="company_logos">
          <img className="brand_logos" src={brand_logos3} alt="pic" />
          <img className="brand_logos" src={brand_logos4} alt="pic" />
          <img className="brand_logos" src={brand_logos2} alt="pic" />
          <img className="brand_logos" src={brand_logos5} alt="pic" />
          <img className="brand_logos" src={brand_logos} alt="pic" />
        </div>
        <div className="btn_box">
          <button className="home_grid_btn">Learn More</button>
        </div>
      </div>
      <div className="continer2">
        <div className="home_flexs">
          <div className="home_flexs_right">
            <img className="home_flexs_img" src={home_flexs_photo} alt="pic" />
          </div>
          <div className="home_flexs_left">
            <h2 className="home_flexs_title2">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="home_flexs_text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <button className="home_flexs_btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="continer2">
        <div className="home_flexs">
          <div className="home_flexs_left">
            <h2 className="home_flexs_title2">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="home_flexs_text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <button className="home_flexs_btn">Learn More</button>
          </div>
          <div className="home_flexs_right">
            <img className="home_flexs_img" src={home_flexs_photo2} alt="pic" />
          </div>
        </div>
      </div>
      <div className="continer2">
        <div className="team_texts">
          <h3 className="team_title3">TEAM</h3>
          <h2 className="team_title2">Our Talents</h2>
          <p className="team_text">
            Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,
          </p>
        </div>
        <div className="home_grid">
          <div className="home_minbox">
            <div className="img_box">
              <img className="home_grid_photo" src={home_minbox2} alt="pic" />
            </div>
            <div className="texts">
              <h3 className="home_title3">Peg Legge</h3>
              <p className="home_grid_text">CEO</p>
            </div>
          </div>
          <div className="home_minbox">
            <div className="img_box">
              <img className="home_grid_photo" src={home_minbox4} alt="pic" />
            </div>
            <div className="texts">
              <h3 className="home_title3">Richard Guerra</h3>
              <p className="home_grid_text">CTO</p>
            </div>
          </div>
          <div className="home_minbox">
            <div className="img_box">
              <img className="home_grid_photo" src={home_minbox3} alt="pic" />
            </div>
            <div className="texts">
              <h3 className="home_title3">Alexandra Stolz</h3>
              <p className="home_grid_text">DESIGNER</p>
            </div>
          </div>
          <div className="home_minbox">
            <div className="img_box">
              <img className="home_grid_photo" src={home_minbox} alt="pic" />
            </div>
            <div className="texts">
              <h3 className="home_title3">Janet Bray</h3>
              <p className="home_grid_text">DEVELOPER</p>
            </div>
          </div>
        </div>
        <div className="btn_box">
          <button className="home_grid_btn">View Team</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
