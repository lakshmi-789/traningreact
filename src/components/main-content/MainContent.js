import { useState } from "react";

const MainContent = (props) => {
  const [titleName, setTitleName] = useState("Main section");

  const handleClick = () => {
    setTitleName("Clicked Section");
  };

  return (
    <div className="main-content">
      <div>
        <h2 id="demo">
          This is {titleName} is coming from the user {props.userData.name} and
          the age is {props.userData.age}
        </h2>
      </div>
      <br />
      <p>
        Your search term is{" "}
        <strong>
          <em>{props.searchText}</em>
        </strong>
      </p>
      <br />
      <button className="info" onClick={handleClick}>
        Change Name
      </button>
      <button className="alert" onClick={handleClick}>
        Change Name
      </button>
      <button className="success" onClick={handleClick}>
        Change Name
      </button>
      <button onClick={handleClick}>Change Name</button>
      <br />
      <br />
    </div>
  );
};

export default MainContent;
