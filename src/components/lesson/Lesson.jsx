import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Lesson.scss";

const Lesson = ({ course }) => {
  const [cont1, setCont1] = useState(false);
  return (
    <div className="container">
      <div
        className="container-header"
        onClick={() => setCont1((prev) => !prev)}
      >
        <h1>{course.header}</h1>
        <AiOutlineArrowDown className={cont1 ? "active" : ""} />
      </div>
      <motion.div
        animate={{ height: cont1 ? "auto" : 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
        className="container-inner"
      >
        <ul>
          {course.body.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default Lesson;
