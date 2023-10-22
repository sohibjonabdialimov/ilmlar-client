import React from "react";
import "./style.css";
import arrow from "../imgs/arrow7.svg";
import student1 from "../imgs/student1.svg";
import student2 from "../imgs/student2.svg";
import student3 from "../imgs/student3.svg";
import student4 from "../imgs/student4.svg";
import student5 from "../imgs/student5.svg";
import big_square from "../imgs/big_square.svg";
import extra_logo from "../imgs/extra_logo.svg";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const navigation = useNavigate();
  function Registration() {
    navigation("/registration");
  }
  return (
    <section id="student" className="landing_student landing_card">
      <img className="extra_logo" src={extra_logo} alt="" />
      <div className="landing_student_content">
        <div className="landing_student_imgs">
          <img src={student1} alt="" />
          <img src={student2} alt="" />
          <img src={student3} alt="" />
          <img src={student4} alt="" />
          <img src={student5} alt="" />
        </div>
        <div className="landing_student_desc">
          <h2 className="common_title">O’quvchilar</h2>
          <p className="common_text">
            <span>ilmlar.com</span> ta'lim platformasi, masofaviy ta'lim olishni istaganlar uchun to'g'ri tanlov. Siz bu platformada, barcha fanlar bo'yicha video kurslarni topishingiz mumkin. O'zingiz uchun qulay vaqtda va qulay joyda ta'lim oling.
          </p>
          <div onClick={() => Registration()} className="common_btn_wrap">
            <button className="common_btn">O’quvchi</button>
            <img src={arrow} alt="" />
          </div>
          <img className="big_square" src={big_square} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Student;
