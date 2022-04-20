import React from "react";
import appStyles from "./App.module.scss";
import logo from "../../img/large-logo.svg";
import InfoList from "../InfoList/InfoList";
import infoInputsObj from "../../data/infoInputs";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={appStyles.app}>
      <div className={appStyles.logoWrapper}>
        <img src={logo} className={appStyles.logo} alt="FiveSysDev logo" />
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <div className={appStyles.contentWrapper}>
          <div className={appStyles.content}>
            <h2 className={appStyles.contentTitle}>Interview Feedback</h2>
            <InfoList list={infoInputsObj} />
            
          </div>
          <div className={appStyles.content}> </div>
        </div>
      </form>
    </div>
  );
}

export default App;
