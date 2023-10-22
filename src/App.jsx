import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Baykurs from "./kurslar/Baykurs";
import Subs from "./sidebarRouters/Subs";
import Darslar from "./sidebarRouters/Darslar";
import TeacherInfo from "./mainRouters/TeacherInfo";
import TeachPulyichishok from "./teacher/MainRoute/moneyProcess/Pulyichishok";
import TeachEditProfile from "./teacher/MainRoute/editProfile/TeachEditProfile";
import StudentLayout from "./layout/student/StudentLayout";
import Lessons from "./mainRouters/lessons/Lessons.student";
import Balance from "./mainRouters/balance/Balance.student";
import Begin from "./Begin";
import AboutCourseInfo from "./kurslar/AboutCourseInfo";
import Profile from "./mainRouters/profile/Profile.student";
import CourseStatistic from "./teacher/MainRoute/courseStatistic/CourseStatistic";
import TeacherLayout from "./layout/teacher/TeacherLayout";
import LessonsTeacher from "./teacher/MainRoute/Lessons/LessonsTeacher";
import TakingMoney from "./teacher/MainRoute/takingMoney/TakingMoney";
import PaidCourseDownload from "./teacher/MainRoute/paidCouseDownload/PaidCourseDownload";
import FreeCourseDownload from "./teacher/MainRoute/freeCourseDownload/FreeCourseDownload";
import TeacherProfile from "./teacher/MainRoute/profile/TeacherProfile";
import Statistic from "./teacher/MainRoute/statistic/Statistic";
import SelectDownloadCourse from "./teacher/MainRoute/selectDownloadCourse/SelectDownloadCourse";
import TeacherBalance from "./teacher/MainRoute/teacherBalance/TeacherBalance";
import StudentProfileEdit from "./teacher/pages/studentProfileEdit/StudentProfileEdit";
import CourseInfo from "./teacher/MainRoute/courseInfo/CourseInfo";
import TeachUpdateonekurs from "./teacher/MainRoute/updateCourseOne/Updateonekurs";
import TeachUpdatekurs from "./teacher/MainRoute/updateCourse/Updatekurs";
import StudentLogin from "./sign/login/StudentLogin";
import TeacherLogin from "./sign/login/TeacherLogin";
import Select from "./select/Select";
import ProcessFreeDownload from "./teacher/MainRoute/processFreeDownload/ProcessFreeDownload";
import SuccessFreeDownload from "./teacher/MainRoute/successFreeDownload/SuccessFreeDownload";
import StudentRegistration from "./sign/registration/StudentRegistration";
import TeacherRegistration from "./sign/registration/TeacherRegistration";
import NotBoughtCourse from "./kurslar/NotBoughtCourse";
import SelectLogin from "./select/SelectLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<StudentLogin />} />
        <Route path="registration" element={<StudentRegistration />} />
        <Route path="teacherlogin" element={<TeacherLogin />} />
        <Route path="teacherregistration" element={<TeacherRegistration />} />
        <Route path="select" element={<Select />} />
        <Route path="selectLogin" element={<SelectLogin />} />
        <Route path="/student/kurs/olinganlar/:kursId" element={<Baykurs />} />
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Lessons />} />
          <Route path="hisoblar" element={<Balance />} />
          <Route path="notboughtcouse/:kursId" element={<NotBoughtCourse />} />
          <Route path="kurs/:kursId" element={<AboutCourseInfo />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Subs />} />
            <Route path="subs" element={<Subs />} />
            <Route path="darslar" element={<Darslar />} />
          </Route>
          <Route path="teacherinfo/:teacherId" element={<TeacherInfo />} />
        </Route>

        <Route path="/editprofil" element={<StudentProfileEdit />} />
        <Route path="/editteacherprofile" element={<TeachEditProfile />} />

        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<LessonsTeacher />} />
          <Route path="darslar" element={<LessonsTeacher />} />
          <Route path="hisoblar" element={<TeacherBalance />} />
          <Route path="Kurs/:id" element={<AboutCourseInfo />} />
          <Route path="kurs/" element={<SelectDownloadCourse />} />
          <Route path="update/kurs/" element={<TeachUpdatekurs />} />
          <Route path="statistic" element={<Statistic />} />
          <Route path="profile" element={<TeacherProfile />} />
        </Route>
        <Route path="teacher/course/:courseId" element={<CourseInfo />} />
        <Route path="kurs/free" element={<FreeCourseDownload />} />
        <Route path="kurs/money" element={<PaidCourseDownload />} />
        <Route path="hisoblar/pulyichish" element={<TakingMoney />} />
        <Route path="hisoblar/pulyichish/ok" element={<TeachPulyichishok />} />
        <Route path="free/success" element={<SuccessFreeDownload />} />
        <Route path="teacher/statistic/:course" element={<CourseStatistic />} />
        <Route
          path="teacher/processfreedownload"
          element={<ProcessFreeDownload />}
        />
        <Route
          path="teacher/processmoneydownload"
          element={<ProcessFreeDownload />}
        />
        <Route
          path="teacher/update/kurs/:id"
          element={<TeachUpdateonekurs />}
        />
        <Route path="/" element={<Begin />} />
      </Routes>
    </>
  );
}

export default App;
