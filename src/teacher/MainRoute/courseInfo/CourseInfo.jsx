import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./courseInfo.css";
import VideosNavbar from "../../../components/videosTeacherNavbar/VideosNavbar";

import video_player from "../../../imgs/video_player.png";
import VideoInformation from "../../components/videoInformation/VideoInformation";
import axios from "axios";
import MobileHeader from "../../../components/mobileHeader/mobileHeader";

function deleteplatforma(url) {
  try {
    if (url.includes("platforma")) {
      const parts = url.split("/");
      const s = parts.slice(2).join("/");
      return s; // Remove the first 3 segments of the URL
    }
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
    return url;
  }
}

function CourseInfo() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState([]);
  const [courseIndex, setCourseIndex] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState({});

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

  const onBack = () => {
    navigate("/teacher/darslar");
  };

  useEffect(() => {
    axios
      .post(
        "https://api.ilmlar.com/courseone/me",
        { cursId: courseId },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setCourseData(res.data.vedios);
        setSelectedVideo(res.data.vedios[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [courseId]);

  const handleVideoSelection = (video) => {
    setSelectedVideo(video);
  };
  const handleCourseIndex = (index) => {
    setCourseIndex(index);
  };

  return (
    <div className="app-content">
      <div className="course_info">
        <button onClick={onBack} className="back">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        {/* <div className="videos_navbar video_information_scroll">
          <ul className="videos_navbar">
            {courseData.map((course, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedVideo(course);
                  setCourseIndex(index + 1);
                }}
              >
                {index + 1}-dars. {course.nomi}
              </li>
            ))}
          </ul>
        </div> */}
        <div className={modal ? "def2 modal-navbar" : "def2 yoq"}>
          <VideosNavbar
            courseData={courseData}
            handleVideoSelection={handleVideoSelection}
            handleCourseIndex={handleCourseIndex}
            changeModal={changeModal}
            modal={modal}
          />
        </div>
        <div
          className={
            modal || modalDarslar ? "blur main_lesson mobile" : " main_lesson"
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
          <div className="video_information video_information_scroll">
            <div className="img_div">
              <video
                src={`https://api.ilmlar.com/${deleteplatforma(
                  selectedVideo.orni
                )}`}
                alt=""
                disablePictureInPicture
                playbackRate={3}
                controls
                controlsList="nodownload"
              />
            </div>
            <div className="video_information_content">
              <h3>
                {courseIndex} - dars. {selectedVideo.nomi}
              </h3>
              <p>{selectedVideo.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
