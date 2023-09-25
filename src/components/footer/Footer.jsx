import React from "react";
import "./Footer.scss";
import { BiBookReader } from "react-icons/bi";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { PiReadCvLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container1">
        <h1>IT AcademY</h1>
      </div>
      <div className="footer-container2">
        <div>
          <h1>Study</h1>
          <BiBookReader />
        </div>
        <div>
          <h1>Learn</h1>
          <PiReadCvLogoBold />
        </div>
        <div>
          <h1>Create</h1>
          <VscGitPullRequestCreate />
        </div>
      </div>
    </div>
  );
};

export default Footer;
