import React, { useState } from "react";
import Rating from "@mui/material/Rating";

import skillStyles from "./SkillItem.module.scss";

function SkillItem({ skill, removeSkill }) {
  const [rating, setRating] = useState(skill.rating);
  function handleDelete() {
    removeSkill(skill.id);
  }
  return (
    <div className={skillStyles.wrapper}>
      <div className={skillStyles.name}>{skill.name}</div>
      <div className={skillStyles.rating}>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <div className={skillStyles["btn-wrap"]}>
          <button
            type="button"
            className={skillStyles["close-btn"]}
            onClick={handleDelete}
          >
            &#10005;
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillItem;
