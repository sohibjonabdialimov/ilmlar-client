import React, { memo, useEffect, useState } from "react";
import CommentsList from "../sidebarRouters/commentsList/CommentsList";
import { useNavigate, useParams } from "react-router-dom";
import coin from "../imgs/coin.png";
import "./index.css";
import MobileHeader from "../components/mobileHeader/mobileHeader";
import StudentNavbar from "../navbar/student/StudentNavbar";
import axios from "axios";
function AboutCourseInfo() {
  const [heart, setHeart] = useState(false);
  const [kurs, setKurs] = useState({});
  const [price, setPrice] = useState(false);
  const [teacher, setTeacher] = useState({});
  const { kursId } = useParams();
  const [savedCourse, setSavedCourse] = useState([]);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();
  const [profile, setProfil] = useState({});
  function savekurs(id) {
    axios
      .post(
        "https://api.ilmlar.com/users/savecurs",
        {
          cursId: id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/usersme", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setSavedCourse(res?.data?.savecurss);
      });
  }, []);
  useEffect(() => {
    for (let i = 0; i < savedCourse.length; i++) {
      if (savedCourse[i] == kursId) {
        setSaved(true);
      }
    }
  }, [savedCourse]);

  let [modal, setModal] = useState(false);
  let [modalDarslar, setModalDarslar] = useState(false);
  const changeModal = (value) => {
    setModal(value);
  };

  const changeModalDars = (value) => {
    setModalDarslar(value);
  };

  function deleteplatforma(url) {
    try {
      if (url?.includes("platforma")) {
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
  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/courses/" + kursId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setKurs(res.data);
        axios
          .get(
            res.data.teacher_Id
              ? "https://api.ilmlar.com/teacherinfo/" + res.data.teacher_Id
              : "https://api.ilmlar.com/teacherinfo/" + res.data.teacherId
          )
          .then((res) => {
            setTeacher(res.data);
          });
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/usersme", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfil(res.data);
      });
  }, []);
  return (
    <div className="main__course-buy">
      <div className="every__cource-info sidebar-main-wrap w100">
        <div className={modal ? "def modal-navbar" : "def yoq"}>
          <StudentNavbar changeModal={changeModal} modal={modal} />
        </div>
        <div
          className={
            modal || modalDarslar
              ? "blur sidebar-main-wrap mobile_none"
              : "sidebar-main-wrap mobile_none"
          }
        >
          <MobileHeader
            changeModalDars={changeModalDars}
            changeModal={changeModal}
            modal={modal}
            modalDarslar={modalDarslar}
            type={"Kurs haqida"}
          />
          <div
            className="every__cource-bigImg"
            style={{
              backgroundImage: `url(${"https://api.ilmlar.com/" + kurs?.obloshka
                })`,
            }}
          ></div>

          <div className="every__cource-desc">
            <div className="every__cource-header">
              <div
                className="every__cource-title"
                onClick={() => {
                  navigate("/student/teacherinfo/" + teacher?._id);
                }}
              >
                <img
                  src={
                    ("https://api.ilmlar.com" + deleteplatforma(teacher?.path)) ? ("https://api.ilmlar.com" + (teacher?.path)) : ("https://api.ilmlar.com" + (teacher?.path))
                  }
                  alt=""
                />
                <h3>{teacher?.fullname}</h3>
              </div>
              <div className="every__cource-nav">
                {saved ? (
                  <ion-icon
                    onClick={() => {
                      savekurs(kursId);
                      setSaved(false);
                    }}
                    name="bookmark"
                  ></ion-icon>
                ) : (
                  <ion-icon
                    onClick={() => {
                      savekurs(kursId);
                      setSaved(true);
                    }}
                    name="bookmark-outline"
                  ></ion-icon>
                )}
                {kurs?.narxi == 0 ? (
                  <span className="free_mark">Free</span>
                ) : (
                  <img src={coin} alt="" />
                )}
              </div>
            </div>
            <div className="every__cource-name">
              <p>Kurs nomi: {kurs?.Kursname}</p>
            </div>
            <div className="every__cource-about">
              <p>Kurs haqida: {kurs?.Kursdesc}</p>
            </div>
            <div className="every__cource-num">
              <p className="every__cource-para">
                Kurs narxi: {kurs?.narxi} so'm
              </p>
              <p className="every__cource-para">Olingan: {kurs?.subs?.length || kurs?.subs}</p>
              <p className="every__cource-para">
                Davomiyligi: {kurs?.muddati}oy
              </p>
            </div>
            <div className="every__course-buttons">
              <button
                onClick={() => {
                  const isCursIdExists = profile?.mycurs?.some(
                    (curs) => curs?.cursId === kursId
                  );

                  if (isCursIdExists) {
                    navigate("/student/kurs/olinganlar/" + kursId);
                  } else {
                    navigate("/student/notboughtcouse/" + kursId)
                  }
                }}
              >
                Video darslar
              </button>

              <button
                onClick={() => navigate("/student/notboughtcouse/" + kursId)}
              >
                Kursni olish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileForedit">
        <CommentsList commints={kurs?.Commint} />
      </div>
      <div className={modalDarslar ? "defDars modalDarslar aa" : "defDars yoq"}>
        <CommentsList
          modalDarslar={modalDarslar}
          changeModalDars={changeModalDars}
          commints={kurs?.Comments}
        />
      </div>
    </div>
  );
}

export default memo(AboutCourseInfo);
