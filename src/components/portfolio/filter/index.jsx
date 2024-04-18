import React, { useState } from "react";

import "./style.scss";

const filtersData = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Products",
    id: "product",
  },
  {
    name: "Front End",
    id: "front-end",
  },
  {
    name: "Back End",
    id: "back-end",
  },
  {
    name: "Web Apps",
    id: "web-app",
  },
  {
    name: "Full-Stack",
    id: "full-stack",
  },
];

const Filters = ({ filterProjects }) => {
  const [active, setActive] = useState("");

  const clickHandler = (id) => {
    setActive(id);
    filterProjects(id);
  };

  return (
    <ul className="filters-menu-items">
      {filtersData.map((item) => {
        return (
          <li
            className={`filter-menu-item ${active === item.id ? "active" : ""}`}
            key={item.id}
            onClick={() => clickHandler(item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
