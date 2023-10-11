import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";
const LessonCard = (props) => {
  function deleteplatforma(url){
    try {
      if(url.includes("platforma")){
        url=url.split("/")
        let res=""
        for(let i=2;i<url.length;i++){
          res+="/"+url[i]
        }
        return(res)
      }
      return "/"+url
    } catch (error) {
      console.log(error)
    }
  }
  const navigate = useNavigate();
  let courseId = props.cart._id;
  return (
    <div
    style={{cursor: "pointer"}}
      onClick={() => {
        navigate("/teacher/course/" + courseId);
      }}
    >
      <div className="main-cart">
        <img src={"https://api.ilmlar.com"+deleteplatforma(props.cart.obloshka)} alt="" />
        <div className="cart__content">
          <h3>{props.cart.Kursname}</h3>
          <p>{props.cart.Kursdesc}</p>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
