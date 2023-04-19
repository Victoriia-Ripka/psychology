import React from "react";
import { Link } from "react-router-dom";

const ModalMenu = () => {
  const navigationItems = [
    { головна: "/" },
    { "про мене": "about" },
    { консултації: "consultations" },
    { "програма для батьків": "program-for-parents" },
    { статті: "articles" },
  ];
  return (
    <div>
      <nav>
        <Link to="/">Психолог Світлана Ріпка</Link>
        <div>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link to={Object.values(item)}>{Object.keys(item)}</Link>
            </li>
          ))}
        </div>
      </nav>
      <button>записатися на консультацію</button>
    </div>
  );
};

export default ModalMenu;
