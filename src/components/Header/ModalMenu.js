import React from "react";
import { Link, NavLink } from "react-router-dom";

const ModalMenu = () => {
  return (
    <div>
      <nav>
        <Link to="/">Психолог Світлана Ріпка</Link>
        <ul>
          <li>
            <NavLink to="/">головна</NavLink>
          </li>
          <li>
            <NavLink to="/about">про мене</NavLink>
          </li>
          <li>
            <NavLink to="/consultations">консультації</NavLink>
          </li>
          <li>
            <NavLink to="/program-for-parents">програма для батьків</NavLink>
          </li>
          <li>
            <NavLink to="/articles">статті</NavLink>
          </li>
        </ul>
      </nav>
      <button>записатися на консультацію</button>
    </div>
  );
};

export default ModalMenu;
