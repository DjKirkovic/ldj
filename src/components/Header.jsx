import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./ui/Button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigationArray = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full h-20 bg-[#16181C]/90 backdrop-blur-2xl sticky top-0 z-50">
      <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between ">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-24" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {navigationArray.map(({ title, link }) => (
            <Link key={link} to={link}>
              <p
                className={`${
                  pathname === link ? "text-white" : "text-green-500" //"text-designColor" : "text-lightText"
                } text-sm uppercase font-semibold hover:text-blue-500 cursor-pointer duration-300 `}
              >
                {title}
              </p>
            </Link>
          ))}

          
        </div>
      </div>
    </header>
  );
};

export default Header;