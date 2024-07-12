import React from "react";
import { assests } from "../../public/assets";
import "./socials.scss";

const Socials = () => {
  return (
    <div className="socials">
      {assests.socials.map((social, idx) => {
        const Icon = social.icon;
        return (
          <a href={social.href} target="_blank" className="socialicons">
            <Icon key={idx} />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
