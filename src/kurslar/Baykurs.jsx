import React from "react";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./courseInfo.module.css";
import MobileHeader from "../components/mobileHeader/mobileHeader";

function deleteplatforma(url) {
  try {
    if (url?.includes("platforma")) {
      const parts = url.split("/");
      const s = parts.slice(2).join("/");
      console.log(s);
      return s; // Remove the first 3 segments of the URL
    }
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
    return url;
  }
}
function Baykurs() {
  const [lessonIndex, setLessonIndex] = useState(1);
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/student/kurs/" + kursId);
  };
  const [courseData, setCourseData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { kursId } = useParams();

  const [kurs, setKurs] = useState({});
  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/courses/" + kursId, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourseData(res.data.vedios);
        setSelectedVideo(res.data.vedios[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [kursId]);
  console.log(courseData);
  console.log(selectedVideo);
  let [modal, setModal] = useState(false);
  let [modalDarslar, setModalDarslar] = useState(false);
  const changeModal = (value) => {
    setModal(value);
  };

  const changeModalDars = (value) => {
    setModalDarslar(value);
  };
  return (<>
    <MobileHeader
            changeModalDars={changeModalDars}
            changeModal={changeModal}
            modal={modal}
            modalDarslar={modalDarslar}
            type={"playlist"}
          />
    <div className="app-content">
      
      <div className={styles.course_info}>
        <button onClick={onBack} className={styles.back}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        
        <div className="videos_navbar">
          <ul>
            {courseData?.map((course, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedVideo(course);
                  setLessonIndex(index + 1);
                }}
              >
                {index + 1}-dars. {course.nomi}
              </li>
            ))}
          </ul>
        </div>
        <div className="video_information video_information_scroll">
          <div className="img_div">
            <video
              src={`https://api.ilmlar.com/${deleteplatforma(
                selectedVideo.orni
              )}`}
              alt=""
              controls
              controlsList="nodownload"
            />
          </div>
          <div className="video_information_content">
            <h3>{lessonIndex} - dars. {selectedVideo.nomi}</h3>
            <p>{selectedVideo.desc}</p>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Baykurs;
