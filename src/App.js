import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
import "./App.css";
import "./assets/css/root.css";
import "./assets/scss/index.scss";

const App = () => {
  const brandName = "Logo Name";
  const [userData, setuserData] = useState({});
  const [theme, settheme] = useState("light");
  const [searchText, setsearchText] = useState("");

  const getUserData = (user) => {
    setuserData(user);
  };

  return (
    <div className={`App ${theme}`}>
      <Header
        brandName={brandName}
        getUserData={getUserData}
        theme={theme}
        settheme={settheme}
        searchText={searchText}
        setsearchText={setsearchText}
      />
      <MainContent userData={userData} searchText={searchText} />
      <Footer brandName={brandName} />
    </div>
  );
};

export default App;
