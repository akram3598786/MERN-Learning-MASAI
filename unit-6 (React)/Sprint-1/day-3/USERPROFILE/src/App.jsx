import "./styles.css";
import React from "react";
import UserDetail from "../Components/UserDetail";
import Profile from "../Components/Profile";

function DisplayUppersec() {
  return (
    <>
      <div id="upperSection">
        <h2>{UserDetail.name}</h2>
        <button id="followBtn">Follow</button>
      </div>
      <div id="title">
        <p2>{UserDetail.title}</p2>
      </div>
    </>
  );
}

const DisplaySkills = UserDetail.skillsets.map((ele) => {
  return (
    <div className="slillBox">
      <img className="skillIcon" src={ele.icon} alt="icon" />
      <span>{ele.skill}</span>
    </div>
  );
  /* 
    let Sk_icon = React.createElement("img",{},null)
    Sk_icon.src=ele.icon
    let divEle = React.createElement("div",{},Sk_icon);
    console.log(divEle);
    return divEle;
    */
});

function DisplayProfile() {
  return (
    <div>
      <Profile src={UserDetail.avatar_url} />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <div id="left_section">
        <div>{DisplayUppersec()}</div>
        <div className="skills">{DisplaySkills}</div>
      </div>
      <div id="right_section">{DisplayProfile()}</div>
    </div>
  );
}
