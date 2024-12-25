import logo from "../public/issamlogo.png";
//icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const assests = {
  logo,
  socials: [
    {
      href: "https://www.linkedin.com/in/issam-kharbache/",
      icon: FaLinkedinIn,
    },
    { href: "https://github.com/IssamKharbache", icon: FaGithub },
    { href: "mailto:kharbache.contact@gmail.com", icon: IoMdMail },
  ],
};
