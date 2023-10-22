import React from "react";
import "./style.css";
import about_img from "../imgs/about.svg";
import green_round from "../imgs/green_round.svg";
import two_img from "../imgs/two_img.svg";
import blue_round from "../imgs/blue_round.svg";
import red_round from "../imgs/red_round.svg";
const About = () => {
  return (
    <section id="about" className="landing_about">
      <div className="landing_about_content">
        <div className="landing_about_img">
          <img src={about_img} alt="" />
          <img className="green_round" src={green_round} alt="" />
        </div>
        <div className="landing_about_desc">
          <img className="red_round" src={red_round} alt="" />
          <img className="blue_round" src={blue_round} alt="" />
          <h2 className="common_title">Biz haqimizda</h2>
          <p className="common_text">
            <span>ilmlar.com</span> – bu masofaviy ta’lim platformasi. Bu
            platforma insonlar o’rtasida ilmlarni o’rganish va o’rgatish uchun
            yaratilgan. Platformada ham o’quvchilar ilm olishi uchun, ham
            o’qituvchilar ta’lim berishi uchun kerakli barcha sharoitlar mavjud.
          </p>
          <img className="two_img" src={two_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
