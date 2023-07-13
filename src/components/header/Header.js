import { ReactComponent as HeroIcon } from "../../assets/images/logo.svg";
import { ReactComponent as DrakThemeIcon } from "../../assets/images/dark-theme.svg";
import { ReactComponent as LightThemeIcon } from "../../assets/images/light-theme.svg";
// import DrakThemeIcon from "../../assets/images/dark-theme.svg";
// import LightThemeIcon from "../../assets/images/light-theme.svg";
import UserIcon from "../../assets/images/user.png";

const Header = ({ theme, settheme }) => {
  // const changeTheme = () => {
  //   if (theme === "light") {
  //     settheme("dark");
  //   } else {
  //     settheme("light");
  //   }
  // };

  return (
    <header className={`header content-wrapper ${theme}`}>
      <div className="hero-section">
        <a href="/">
          {/* <img src={HeroIcon} alt="hero" /> */}
          <HeroIcon className="hero-image icon-image" />
          <span className="hero-title">React</span>
        </a>
      </div>
      <div className="right-content">
        <div className="search-bar">
          <input type="search" placeholder="Search.." />
        </div>
        <div className="nav-items">
          <a href="https://react-dev/learn" className="nav-item link-item">
            Learn
          </a>
          <a href="https://react-dev/reference" className="nav-item link-item">
            Reference
          </a>
          <a href="https://react-dev/community" className="nav-item link-item">
            Community
          </a>
          <a href="https://react-dev/blog" className="nav-item link-item">
            Blog
          </a>
          {theme === "light" ? (
            <button
              className="nav-item click-item"
              onClick={function () {
                settheme("dark");
              }}
            >
              {/* <img src={LightThemeIcon} alt="light-theme" /> */}
              <LightThemeIcon className="icon icon-image" />
            </button>
          ) : (
            <button
              className="nav-item click-item"
              onClick={() => settheme("light")}
            >
              {/* <img src={DrakThemeIcon} alt="dark-theme" /> */}
              <DrakThemeIcon className="icon icon-image" />
            </button>
          )}
          <button className="nav-item click-item">
            <img src={UserIcon} alt="user" className="icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
