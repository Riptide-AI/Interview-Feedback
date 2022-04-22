import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import appStyles from "./App.module.scss";
import logo from "../../img/large-logo.svg";
import InfoList from "../InfoList/InfoList";
import infoInputsObj from "../../data/infoInputs";
import CheckboxList from "../CheckboxList/CheckboxList";
import checkListObj from "../../data/checkListObj";
import SkillsList from "../SkillsList/SkillsList";
import feedbackAreaObj from "../../data/feedbackAreaObj";
import FeedbackList from "../FeedbackList/FeedbackList";
import Button from "../Button/Button";

function App() {
  const printRef = useRef();
  const handlePrint = useReactToPrint({ content: () => printRef.current });
  return (
    <div ref={printRef} className={appStyles.app}>
      <div className={appStyles.logoWrapper}>
        <img src={logo} className={appStyles.logo} alt="FiveSysDev logo" />
      </div>
      <form action="#" className={appStyles.form}>
        <div className={appStyles.contentWrapper}>
          <div className={appStyles.content}>
            <h2 className={appStyles.contentTitle}>Interview Feedback</h2>
            <InfoList list={infoInputsObj} />
            <CheckboxList list={checkListObj} />
            <SkillsList />
          </div>
          <div className={appStyles.content}>
            <FeedbackList list={feedbackAreaObj} />
            <Button value="Save as PDF" type="button" action={handlePrint} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
