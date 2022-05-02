import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import skillStyles from "./SkillTopic.module.scss";

function SkillTopic({ topic, removeTopic }) {
  const [rating, setRating] = useState(topic.rating);
  function handleDelete() {
    removeTopic(topic.id);
  }
  return (
    <div className={skillStyles.wrapper}>
      <div className={skillStyles.header}>
        <div className={skillStyles.section}>
          <div className={skillStyles.name}>{topic.name}</div>
          <div className={skillStyles.rating}>
            <Rating
              name="medium"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
        </div>
        <div className={skillStyles["btn-wrap"]}>
          <button
            type="button"
            className={skillStyles["close-btn"]}
            onClick={handleDelete}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillTopic;
