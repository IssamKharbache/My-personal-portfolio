import logo from "../public/issamlogo.png";
//icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";

export const assests = {
  logo,
  socials: [
    {
      href: "https://www.linkedin.com/in/issam-kharbache/",
      icon: FaLinkedinIn,
    },
    { href: "https://github.com/IssamKharbache", icon: FaGithub },
    { href: "mailto:issamkharbache2@gmail.com", icon: IoMdMail },
    { href: "https://www.tiktok.com/@wonder_coder", icon: FaTiktok },
  ],
};
