import React, { useState } from "react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import user from "../../../imgs/edit_user.png";
import camera from "../../../imgs/camera.png";

const StudentProfileEdit = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/student/profile/subs");
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setImage(imageUrl);
  };

  return (
    <div className="app-content">
      <div className={style.edit_profile}>
        <button onClick={onBack} className={style.back}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className={style.imgs_div}>
          <img src={user}  className={style.imgs_div_img} alt="" />
          <div className={style.select_camera_wrap}>
            <img src={camera} alt="camera img" />
            <input
              type="file"
              className={style.img_file_input}
              onChange={handleImageChange}
            />
          </div>
        </div>
        <form onSubmit={(e) => onHandleSubmit(e)} className={style.form}>
          <input type="text" placeholder="ism" />
          <input type="text" placeholder="familiya" />
          <input type="text" placeholder="username" />
          <input type="password" placeholder="parol" />
          <button>Saqlash</button>
        </form>
      </div>
    </div>
  );
};

export default StudentProfileEdit;
