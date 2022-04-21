import React, { useState } from "react";
import SkillItem from "../SkillItem/SkillItem";
import SkillsInput from "../SkillsInput/SkillsInput";
import listStyles from "./SkillsList.module.scss";

function SkillsList() {
  const [list, setList] = useState([]);

  function addSkill(skill) {
    setList((prev) => [...prev, skill]);
  }
  function removeSkill(id) {
    setList(
      list.filter((item) => {
        return item.id !== id;
      })
    );
  }
  return (
    <div className={listStyles.section}>
      <h3 className={listStyles.title}>Candidate`s technical skills</h3>
      <div className={listStyles.wrapper}>
        <SkillsInput addSkill={addSkill} />
        <ul className={listStyles.list}>
          {list.map((skill) => {
            return (
              <SkillItem
                skill={skill}
                removeSkill={removeSkill}
                key={skill.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SkillsList;
