import React from "react";
import appStyles from "./App.module.scss";
import logo from "../../img/large-logo.svg";
import InfoList from "../InfoList/InfoList";
import infoInputsObj from "../../data/infoInputs";
import CheckboxList from "../CheckboxList/CheckboxList";
import checkListObj from "../../data/checkListObj";
import SkillsList from "../SkillsList/SkillsList";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={appStyles.app}>
      <div className={appStyles.logoWrapper}>
        <img src={logo} className={appStyles.logo} alt="FiveSysDev logo" />
      </div>
      <form action="#" onSubmit={handleSubmit} className={appStyles.form}>
        <div className={appStyles.contentWrapper}>
          <div className={appStyles.content}>
            <h2 className={appStyles.contentTitle}>Interview Feedback</h2>
            <InfoList list={infoInputsObj} />
            <CheckboxList list={checkListObj} />
            <SkillsList />
          </div>
          <div className={appStyles.content}> </div>
        </div>
      </form>
    </div>
  );
}

export default App;
