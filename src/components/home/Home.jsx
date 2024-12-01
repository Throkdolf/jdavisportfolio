import React from 'react';
import "./home.css";
import Me from "../../assets/home_img.JPG";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="profile__container">
          {/* TODO : Center Image */}
            <img src={Me} alt="" className="home__img" />
        </div>
        <h1 className="home_name">Jack Davis</h1>
        <span className="home__education">4th Year Computer Science Student @ Georgia Tech</span>
        <span className="home__contact">Contact me: jdavis647@gatech.edu</span>
        {/* TODO: Fix buttons */}
        <HeaderSocials/>
        <ScrollDown />
        
      </div>
    </section>
  )
}

export default Home