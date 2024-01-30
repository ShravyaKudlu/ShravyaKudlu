import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}



function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleItemClick = (index: number) => {
    setSelectedIndex(index);

    // Check if the window width is smaller (mobile or tablet)
    if (window.innerWidth <= 768) {
      const navbarCollapse = document.getElementById("navbarCollapse");
      if (navbarCollapse) {
        navbarCollapse.classList.remove("show"); // Collapse the navbar
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-tranparent fixed-top">
      <div className="container-fluid">
        <Link to="/ShravyaKudlu/" className="navbar-brand">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4 brand-name">{brandName}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="nav-item"
                onClick={() => handleItemClick(index)}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`nav-link ${selectedIndex === index ? "active fw-bold" : "brand-name"}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
