import React, { memo, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../style.css";
import TeachUserprofile from "../../teacher/components/Userprofile";
import t1 from "../../imgs/t1.svg";
import t2 from "../../imgs/t2.svg";
import t3 from "../../imgs/t3.svg";
import t4 from "../../imgs/t4.svg";
import t5 from "../../imgs/t5.svg";
import t6 from "../../imgs/t6.svg";
import prev from "../../imgs/prev.svg";
function TeacherNavbar({ changeModal, modal }) {
  const [modalClass, setModalClass] = useState("");
  
  const lessonsRef = useRef();
  const balanceRef = useRef();
  const saveRef = useRef();
  const statisticRef = useRef();
  const updateRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    if (window.location.pathname === "/teacher/darslar") {
      lessonsRef?.current?.classList?.add("active");
      balanceRef?.current?.classList?.remove("active");
      saveRef?.current?.classList?.remove("active");
      statisticRef?.current?.classList?.remove("active");
      updateRef?.current?.classList?.remove("active");
      profileRef?.current?.classList?.remove("active");
    } else if (window.location.pathname === "/teacher/hisoblar") {
      lessonsRef?.current?.classList?.remove("active");
      balanceRef?.current?.classList?.add("active");
      saveRef?.current?.classList?.remove("active");
      statisticRef?.current?.classList?.remove("active");
      updateRef?.current?.classList?.remove("active");
      profileRef?.current?.classList?.remove("active");
    } else if (window.location.pathname === "/teacher/kurs") {
      lessonsRef?.current?.classList?.remove("active");
      balanceRef?.current?.classList?.remove("active");
      saveRef?.current?.classList?.add("active");
      statisticRef?.current?.classList?.remove("active");
      updateRef?.current?.classList?.remove("active");
      profileRef?.current?.classList?.remove("active");
    } else if (window.location.pathname === "/teacher/statistic") {
      lessonsRef?.current?.classList?.remove("active");
      balanceRef?.current?.classList?.remove("active");
      saveRef?.current?.classList?.remove("active");
      statisticRef?.current?.classList?.add("active");
      updateRef?.current?.classList?.remove("active");
      profileRef?.current?.classList?.remove("active");
    } else if (window.location.pathname === "/teacher/update/kurs") {
      lessonsRef?.current?.classList?.remove("active");
      balanceRef?.current?.classList?.remove("active");
      saveRef?.current?.classList?.remove("active");
      statisticRef?.current?.classList?.remove("active");
      updateRef?.current?.classList?.add("active");
      profileRef?.current?.classList?.remove("active");
    } else if (window.location.pathname === "/teacher/profile") {
      profileRef?.current?.classList?.add("active");
      lessonsRef?.current?.classList?.remove("active");
      balanceRef?.current?.classList?.remove("active");
      saveRef?.current?.classList?.remove("active");
      statisticRef?.current?.classList?.remove("active");
      updateRef?.current?.classList?.remove("active");
    }
  }, [window.location.pathname]);

  const handleClick = () => {
    changeModal(false);
  };

  return (
    <div
      className={
        modalClass == "qaytish"
          ? "Nav  teacher-navbar qaytish"
          : "Nav teacher-navbar"
      }
    >
      <div className={modal ? "circle" : "d-none circle"} onClick={handleClick}>
        <img src={prev} alt="prev" />
      </div>
      <div>
        <TeachUserprofile />
      </div>
      <ul className="teacher_nav_main">
        <li ref={lessonsRef}>
          <img src={t1} alt="" />
          <Link to="/teacher/darslar">darslar</Link>
        </li>
        <li ref={balanceRef}>
          <img src={t2} alt="" />
          <Link to="/teacher/hisoblar">hisob balans</Link>
        </li>
        <li ref={saveRef}>
          <img src={t3} alt="" />
          <Link to="/teacher/kurs">kurs yuklash</Link>
        </li>
        <li ref={statisticRef}>
          <img src={t4} alt="" />
          <Link to="/teacher/statistic">statistika</Link>
        </li>
        <li ref={updateRef}>
          <img src={t5} alt="" />
          <Link to="/teacher/update/kurs">kursni yangilash</Link>
        </li>
        <li ref={profileRef}>
          <img src={t6} alt="" />
          <Link to="/teacher/profile">profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default TeacherNavbar;
