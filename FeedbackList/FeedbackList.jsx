import React from "react";
import FeedbackArea from "../FeedbackArea/FeedbackArea";
import listStyles from "./FeedbackList.module.scss";

function FeedbackList({ list, isFormReset }) {
  return (
    <div className={listStyles.section}>
      {list.areas.map((item) => (
        <FeedbackArea area={item} key={item.id} isFormReset={isFormReset} />
      ))}
    </div>
  );
}

export default FeedbackList;
