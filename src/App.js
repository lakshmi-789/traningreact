import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
import "./App.css";
import { useState } from "react";

const App = () => {
  const brandName = "Logo";
  const [userData, setuserData] = useState({});

  const getUserData = (user) => {
    setuserData(user);
  };

  return (
    <div className="App">
      <Header brandName={brandName} getUserData={getUserData} />
      <MainContent userData={userData} />
      <Footer brandName={brandName} />
    </div>
  );
};

export default App;
