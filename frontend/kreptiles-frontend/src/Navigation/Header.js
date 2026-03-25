import React, { useState } from "react";
import "./css/Header.css";

const navItems = [
  { label: "About Me", id: 0 },
  { label: "Reptiles and Other Exotics", id: 1 },
  { label: "Crochet Projects", id: 2 }
];

export default function Header({ onSelect }) {
  const [collapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState(0);

  return (
    <header className="header-nav">
      <div className="nav-inner">
        
        {/* Toggle Button (for mobile/menu) */}
        <button
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </button>

        {/* Nav Items */}
        <ul className={`nav-list ${collapsed ? "collapsed" : ""}`}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${active === index ? "active" : ""}`}
              onClick={() => {
                setActive(index);
                onSelect(item.id);
                setCollapsed(true); // auto close on click (mobile feel)
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