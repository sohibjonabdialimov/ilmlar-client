import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import camera from "../../../imgs/camera.png";

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
    return "/" + url;
  } catch (error) {
    console.log(error);
  }
}

const TeachEditProfile = () => {
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState([]);

  const fullnameRef = useRef(null);
  const mutahasislikRef = useRef(null);
  const bioRef = useRef(null);
  const joylashuvRef = useRef(null);
  const boglashlinkRef = useRef(null);
  const usernameRef = useRef(null);
  const userimgRef = useRef(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setImage(imageUrl);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", fullnameRef.current.value);
    formData.append("mutahasislik", mutahasislikRef.current.value);
    formData.append("bio", bioRef.current.value);
    formData.append("joylashuv", joylashuvRef.current.value);
    formData.append("boglashlink", boglashlinkRef.current.value);
    formData.append("username", usernameRef.current.value);
    formData.append("file", userimgRef.current.files[0]);

    axios
      .put("https://api.ilmlar.com/teacher/", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/teacher/profile");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/teacherme/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-content">
      <div className={styles.edit_student_profile}>
        <button onClick={onBack} className={styles.back}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className={styles.imgs_div}>
          <img
            src={
              image || "https://api.ilmlar.com" + deleteplatforma(profile.path)
            }
            className={styles.imgs_div_img}
            alt=""
          />
          <div className={styles.select_camera_wrap}>
            <img src={camera} alt="camera img" />
            <input
              type="file"
              className={styles.img_file_input}
              ref={userimgRef}
              onChange={handleImageChange}
            />
          </div>
        </div>
        <form onSubmit={(e) => onHandleSubmit(e)} className={styles.form}>
          <div className={styles.input_wrap}>
            <input
              ref={fullnameRef}
              defaultValue={profile.fullname}
              type="text"
              placeholder="ism-familiya "
            />
          </div>
          <div className={styles.input_wrap}>
            <input
              ref={mutahasislikRef}
              type="text"
              defaultValue={profile.mutahasislik}
              placeholder="mutaxassislik"
            />
          </div>
          <div className={styles.input_wrap}>
            <input
              ref={bioRef}
              type="text"
              defaultValue={profile.bio}
              placeholder="bio"
            />
          </div>

          <div className={styles.input_wrap}>
            <input
              ref={joylashuvRef}
              type="text"
              defaultValue={profile.joylashuv}
              placeholder="joylashuv"
            />
          </div>
          <div className={styles.input_wrap}>
            <input
              ref={boglashlinkRef}
              type="text"
              placeholder="havola"
              defaultValue={profile.boglashlink}
            />
          </div>
          <div className={styles.input_wrap}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="username"
              defaultValue={profile.username}
            />
          </div>
          <button type="submit">Saqlash</button>
        </form>
      </div>
    </div>
  );
};

export default TeachEditProfile;
