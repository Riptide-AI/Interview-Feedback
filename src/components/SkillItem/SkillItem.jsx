import React, { useState } from "react";
import skillStyles from "./SkillItem.module.scss";

function SkillItem({ skill, removeSkill }) {
  const [rating] = useState(skill.rating);
  function handleDelete() {
    removeSkill(skill.id);
  }
  return (
    <div className={skillStyles.wrapper}>
      <div className={skillStyles.name}>{skill.name}</div>
      <div className={skillStyles.rating}>{rating}</div>
      <button
        type="button"
        className={skillStyles.closeBtn}
        onClick={handleDelete}
      >
        &#10005;
      </button>
    </div>
  );
}

export default SkillItem;
