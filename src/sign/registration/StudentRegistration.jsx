import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

const StudentRegistration = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRepeatRef = useRef();
  const fileRef = useRef();
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const onHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileRef.current.files[0]);
    formData.append("username", usernameRef.current.value);
    formData.append("password", passwordRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("fullname", `${nameRef.current.value} ${surnameRef.current.value}`);
    
    console.log(formData);
    axios
      .post("https://api.ilmlar.com/users/register/", formData)
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="app-content">
      <div className="sign_wrap">
        <h3 className="registr_title">O'quvchi sifatida ro'yxatdan o'tish</h3>
        <button onClick={onBack} className="back">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <form className="registr_form" onSubmit={(e) => onHandler(e)}>
          <input ref={nameRef} type="text" placeholder="ism" required />
          <input ref={surnameRef} type="text" placeholder="familiya" required />
          <input ref={usernameRef} type="text" placeholder="username" required />
          <input ref={emailRef} type="email" placeholder="email" required />
          <input ref={fileRef} type="file" placeholder="profilephoto" required />
          <input ref={passwordRef} type="password" placeholder="parol" required />
          <input ref={passwordRepeatRef} type="password" placeholder="parolni qayta yozing" required />
          <div className="register-mobile__forBtn">
          <button type="submit">Ro'yxatdan o'tish</button>
          </div>
          
        </form>
        <Link className="alright_note" to={"/login"}>alright, do you have an account?</Link>
      </div>
    </div>
  );
};

export default StudentRegistration;