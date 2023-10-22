import React from "react";
import "./style.css";
import logo from "../imgs/ilmlar.com.svg";
import big_logo from "../imgs/big_ilmlar.com.svg";
import arrow from "../imgs/arrow7.svg";
import hero1 from "../imgs/hero1.svg";
import hero2 from "../imgs/hero2.svg";
import hero3 from "../imgs/hero3.svg";
import hero4 from "../imgs/hero4.svg";
import hero5 from "../imgs/hero5.svg";
import hero6 from "../imgs/hero6.svg";
import two_img from "../imgs/two_img.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const LogIn = () => {
    navigate("/select");
  };
  const SignUp = () => {
    navigate("/selectLogin");
  };
 
  return (
    <section className="landing_hero landing_card">
      <nav className="landing_list">
        <div className="landing_logo">
          <img src={logo} alt="" />
        </div>
        <div className="landing_navbar">
          <a href="#about">Biz haqimizda</a>
          <a href="#teacher">O’qituvchilar</a>
          <a href="#student">O’quvchilar</a>
        </div>
        <div onClick={() => {SignUp()}} className="common_btn_wrap login_btn_wrap">
          <button className="common_btn">Kirish</button>
          <img src={arrow} alt="" />
        </div>
      </nav>
      <div className="landing_hero_content">
        <div className="landing_hero_desc">
          <img className="hero_desc_logo" src={big_logo} alt="" />
          <h4 className="landing_hero_subtitle">
            Masofaviy ta’lim platformasi
          </h4>
          <p>
            Ilg'or platformamiz yordamida <br /> o'rganish va o'rgatishni yanada{" "}
            <br />
            oqilona usulini kashf eting.
          </p>
          <div onClick={() => {LogIn()}} className="common_btn_wrap">
            <button className="common_btn">Boshlash</button>
            <img src={arrow} alt="" />
          </div>
          <img className="hero_two_img" src={two_img} alt="" />
        </div>
        <div className="landing_hero_imgs">
          <img className="hero_img_1" src={hero1} alt="" />
          <img className="hero_img_2" src={hero2} alt="" />
          <img className="hero_img_3" src={hero3} alt="" />
          <img className="hero_img_4" src={hero4} alt="" />
          <img className="hero_img_5" src={hero5} alt="" />
          <img className="hero_img_6" src={hero6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
