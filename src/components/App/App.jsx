import React from "react";
import appStyles from "./App.module.scss";
import logo from "../../img/large-logo.svg";

function App() {
  return (
    <div className={appStyles.app}>
      <div className={appStyles.logoWrapper}>
        <img src={logo} className={appStyles.logo} alt="FiveSysDev logo" />
      </div>
      <div className={appStyles.contentWrapper}>
        <div className={appStyles.content}>
          {" "}
          <h2 className={appStyles.contentTitle}>Interview Feedback</h2>{" "}
        </div>
        <div className={appStyles.content}> </div>
      </div>
    </div>
  );
}

export default App;
