import React, { useState } from "react";
import "../css/Header.css";

const navItems = [
  { label: "About Me", id: 0 },
  { label: "Reptiles and Other Exotics", id: 1 },
  { label: "Crochet Projects", id: 2 }
];

export default function Header({ onSelect }) {
  const [active, setActive] = useState(0);

  return (
    <header className="header-nav">
      <div className="nav-inner">

        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${active === index ? "active" : ""}`}
              onClick={() => {
                setActive(index);
                onSelect(item.id);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}