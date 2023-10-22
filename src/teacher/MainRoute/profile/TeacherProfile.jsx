import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MobileHeader from "../../../components/mobileHeader/mobileHeader";
import TeacherNavbar from "../../../navbar/teacher/TeacherNavbar";
function deleteplatforma(url) {
  try {
    if (url.includes("platforma")) {
      url = url.split("/");
      let res = "";
      for (let i = 2; i < url.length; i++) {
        res += "/" + url[i];
      }
      return res;
    }
    return "" + url;
  } catch (error) {
    console.log(error);
  }
}
function TeacherProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/teacherme/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data);
      });
  }, []);

  let [modal, setModal] = useState(false);
  let [modalDarslar, setModalDarslar] = useState(false);
  function clickModal() {
    setModal(!modal);
  }
  const changeModal = (value) => {
    setModal(value);
  };
  function clickDarslarModal() {
    console.log("darslarModal", modalDarslar);
    setModalDarslar(!modalDarslar);
    console.log("darslarModal", modalDarslar);
  }
  const changeModalDars = (value) => {
    setModalDarslar(value);
  };
  
  return (
    <div className={styles.teacher_profil}>
      <div className={modal ? "def modal-navbar" : "def yoq"}>
          <TeacherNavbar changeModal={changeModal} modal={modal} />
        </div>
        <div
          className={
            modal || modalDarslar
              ? "blur w100 main_lesson mobile mobile_none"
              : "w100 main_lesson mobile_none"
          }
        >
          <MobileHeader
            changeModalDars={changeModalDars}
            changeModal={changeModal}
            modal={modal}
            modalDarslar={modalDarslar}
            type={"search"}
            where="teacher"
          />
        </div>
      <div className="teacherHomePage main_profile_container sidebar-wrap teacher-main-sidebar">
      <div className={styles.teacher_profile_wrap}>
        <img
          src={"https://api.ilmlar.com" + deleteplatforma(profile.path)}
          alt=""
        />
        <h2>{profile.fullname}</h2>
        <h4>{profile.obunachilar} obunachi</h4>
        <div className={styles.profile_teacher_desc}>
          <p>Mutaxassislik: {profile.mutahasislik}</p>
          <p>BIO: {profile.bio}</p>
          <label className={styles.location}>
            Joylashuv: {profile.joylashuv}
          </label>
        </div>

        <div className={styles.profile_buttons}>
          <button onClick={() => navigate("/editteacherprofile")}>
            Profilni tahrirlash
          </button>
          <button>Chiqib ketish</button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default TeacherProfile;
