// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./App.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import carousel1 from "./imgs/carusel/1.jpg";
// import img_platforma from "./imgs/begin_platforma_img.png";

// import carousel2 from "./imgs/carusel/2.jpg";
// import carousel3 from "./imgs/carusel/3.png";
// import carousel4 from "./imgs/carusel/4.jpg";
// import carousel6 from "./imgs/carusel/6.jpg";
// import carousel7 from "./imgs/carusel/7.jpg";
// import carousel8 from "./imgs/carusel/8.png";
// import carousel9 from "./imgs/carusel/9.jpg";
// import carousel10 from "./imgs/carusel/10.jpg";
// import carousel11 from "./imgs/carusel/11.jpg";
// import carousel12 from "./imgs/carusel/12.jpg";
// import carousel13 from "./imgs/carusel/13.jpg";
// import carousel14 from "./imgs/carusel/14.jpg";
// import carousel15 from "./imgs/carusel/16.jpg";
// import hero_img from "./imgs/hero_img.png";
// import ionex_content from "./imgs/hero_img_2.png";
// import ionex_content2 from "./imgs/hero_img_3.png";
// import ionex_mobile from "./imgs/ionex_mobile.png";
// import big_img from "./imgs/hero_img_1.svg";
// import { useNavigate } from "react-router-dom";
import Hero from "./landing_components/hero/Hero";
import About from "./landing_components/about/About";
import Teacher from "./landing_components/teacher/Teacher";
import Student from "./landing_components/student/Student";
import Footer from "./landing_components/footer/Footer";
import "./landing_components/style.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import Footer from "./components/Footer/Footer";
function Begin() {
  // const [start, setStart] = useState(false);
  // const navigate = useNavigate();
  // const startFunc = () => {
  //   navigate("/select");
  // };
  // const startFuncLogin = () => {
  //   navigate("/selectLogin");
  // };
  // const startClick = () => {
  //   setStart(!start);
  // };

  // const WithStyles = ({ headline, description, image }) => (
  //   <div>

  //     <img className="caruosel-img" style={{ width: "100%", height: "330px", padding:"20px", borderRadius:"20px" }} src={image} alt={headline} />
  //   </div>
  // );

  return (
    // <div className="ionex">
    //   <div className="ionex_header">
    //     <div className="ionex_logo">
    //       <Link>ilmlar.com</Link>
    //     </div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <a href="#aboutIlmlar">Biz haqimizda</a>
    //         </li>
    //         <li>
    //           <a href="#forteacher">O'qituvchilar</a>
    //         </li>
    //         <li>
    //           <a href="#forstudent">O'rganuvchilar</a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <button onClick={startClick}>Boshlash</button>
    //     <div className={start ? "route-select" : "route-select d-none"}>
    //       <div onClick={() => startFuncLogin()}>Kirish</div>
    //       <div onClick={() => startFunc()}>Ro'yhatdan o'tish</div>
    //     </div>
    //   </div>

    //   <div className="ionex_hero">
    //     <div className="hero_logo">
    //       <img src={img_platforma} className="ionex-btn" alt="" />
    //     </div>
    //     <div>
    //       <img className="hero_img mobile-noneb" src={hero_img} alt="ionex" />
    //       <img src={ionex_mobile} alt="img" className="desktop-none" />
    //     </div>
    //   </div>

    //   <Carousel
    //     additionalTransfrom={0}
    //     arrows={false}
    //     autoPlay
    //     autoPlaySpeed={3000}
    //     centerMode={false}
    //     className=""
    //     containerClass="container-with-dots"
    //     customTransition="all 1s linear"
    //     dotListClass=""
    //     draggable
    //     focusOnSelect={false}
    //     infinite
    //     itemClass=""
    //     keyBoardControl
    //     minimumTouchDrag={80}
    //     renderArrowsWhenDisabled={false}
    //     renderButtonGroupOutside={false}
    //     renderDotsOutside={false}
    //     responsive={{
    //       desktop: {
    //         breakpoint: {
    //           max: 3000,
    //           min: 1024,
    //         },
    //         items: 4,
    //         partialVisibilityGutter: 40,
    //       },
    //       mobile: {
    //         breakpoint: {
    //           max: 464,
    //           min: 0,
    //         },
    //         items: 1,
    //         partialVisibilityGutter: 30,
    //       },
    //       tablet: {
    //         breakpoint: {
    //           max: 1024,
    //           min: 464,
    //         },
    //         items: 2,
    //         partialVisibilityGutter: 30,
    //       },
    //     }}
    //     rewind={false}
    //     rewindWithAnimation={false}
    //     rtl={false}
    //     shouldResetAutoplay
    //     showDots={false}
    //     sliderClass=""
    //     slidesToSlide={1}
    //     swipeable
    //   >
    //     <WithStyles image={carousel1} />
    //     <WithStyles image={carousel2} />
    //     <WithStyles image={carousel3} />
    //     <WithStyles image={carousel4} />
    //     <WithStyles image={carousel6} />
    //     <WithStyles image={carousel7} />
    //     <WithStyles image={carousel8} />
    //     <WithStyles image={carousel9} />
    //     <WithStyles image={carousel10} />
    //     <WithStyles image={carousel11} />
    //     <WithStyles image={carousel12} />
    //     <WithStyles image={carousel13} />
    //     <WithStyles image={carousel14} />
    //     <WithStyles image={carousel15} />
    //   </Carousel>
    //   <div id="aboutIlmlar" className="hero_big_img">
    //     <img src={big_img} alt="" />
    //   </div>
    //   <div className="hero_text_content">
    //     <p className="mobile--text">
    //       ilmlar.com ta’lim platformasi, insonlar o’rtasida ilmlarni o’rganish
    //       va o’rgatish uchun yaratilgan.
    //     </p>
    //   </div>
    //   <div id="forteacher" className="ionex_about_content">
    //     <img src={ionex_content} alt="" />
    //     <div className="ionex_about_content_desc">
    //       <h3>O’qituvchilar</h3>
    //       <p className="mobile--text">
    //         <span className="bold_class">ionex.com</span> ta'lim platformasi,
    //         masofaviy ta'lim berishni maqsad qilgan o'qituvchilar uchun
    //         yaratilgan. Bunda siz o'zingizning video darslardan iborat
    //         kurslaringizni platformaga joylashingiz va daromad olishingiz
    //         mumkin.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="ionex_advertise">
    //     <p>ilmlar.com</p>
    //   </div>

    //   <div id="forstudent" className="ionex_about_content ionex-more">
    //     <div className="ionex_about_content_desc child-1">
    //       <h3>O’quvchilar</h3>
    //       <p className="mobile--text">
    //         <span className="bold_class">ilmlar.com</span> ta'lim platformasi,
    //         masofaviy ta'lim olishni istaganlar uchun to'g'ri tanlov. Siz bu
    //         platformada, barcha fanlar bo'yicha video kurslarni topishingiz
    //         mumkin. O'zingiz uchun qulay vaqtda va qulay joyda ta'lim oling.
    //       </p>
    //     </div>
    //     <img src={ionex_content2} alt="" className="child-2" />
    //   </div>

    //   <div className="ionex_advertise">
    //     <p>ilmlar.com</p>
    //   </div>
    //  <Footer />
    // </div>
    <div className="landing_page">
      <Hero />
      <About />
      <Teacher />
      <Student />
      <Footer />
    </div>
  );
}

export default Begin;
