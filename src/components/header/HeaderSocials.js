import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mehmet-keskin-6283b616b/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
