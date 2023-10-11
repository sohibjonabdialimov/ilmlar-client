import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import axios from "axios";

function deleteplatforma(url) {
  try {
    if (url.includes("platforma")) {
      url = url.split("/")
      let res = ""
      for (let i = 2; i < url.length; i++) {
        res += "/" + url[i]
      }
      return (res);
    }
    return "/" + url
  } catch (error) {
    console.log(error)
  }
}

const StatisticCard = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.post("https://api.ilmlar.com/courseone/me", { cursId: kursId }, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }, [])
  })
  let kursId = props.cart._id;
  return (
    <div
    style={{cursor: "pointer"}}
      onClick={() => {
        navigate("/teacher/statistic/" + kursId);
      }}
    >
      <div className="main-cart">
        <img className="statistic_img" src={"https://api.ilmlar.com" + deleteplatforma(props.cart.obloshka)} alt="" />
        <div className="cart-desc">
          <h3>{props.cart.Kursname}</h3>
          <p>{props.cart.Kursdesc}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
