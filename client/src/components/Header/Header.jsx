import React, { useState, useEffect, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
// import AuthContext from '../../context/AuthContext';
import { AuthContext } from "../../context/AuthContext"; // Named import

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);

  const { user, role, token } = useContext(AuthContext);

  const handleStickyHeader = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current?.classList.add("sticky__header");
    } else {
      headerRef.current?.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    // Add the event listener
    window.addEventListener("scroll", handleStickyHeader);

    // Cleanup function - properly remove the event listener
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuActive &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".menu-icon")
      ) {
        setMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  return (
    <header
      className="header fixed top-0 left-0 w-full z-50 bg-white shadow-md"
      ref={headerRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Navigation */}
          <div className={`navigation ${menuActive ? "show__menu" : ""}`}>
            <ul className="menu flex items-center gap-[2.7rem]" ref={menuRef}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                    onClick={() => setMenuActive(false)}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}

              {/* Mobile-only close button inside menu */}
              <li className="md:hidden absolute top-6 right-6">
                <button onClick={toggleMenu} className="text-2xl">
                  <AiOutlineClose />
                </button>
              </li>
            </ul>
          </div>

          {/* Nav right */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role == "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      
                      className="w-full rounded-full"
                      alt="User avatar"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            {/* <h1>{user?.name}</h1> */}

            <span
              className="md:hidden menu-icon cursor-pointer"
              onClick={toggleMenu}
            >
              <BiMenu className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
