import React from "react";
import FeedbackArea from "../FeedbackArea/FeedbackArea";
import listStyles from "./FeedbackList.module.scss";

function FeedbackList({ list }) {
  return (
    <div className={listStyles.section}>
      {list.areas.map((item) => {
        return <FeedbackArea area={item} key={item.id} />;
      })}
    </div>
  );
}

export default FeedbackList;
