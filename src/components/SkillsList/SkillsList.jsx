import React, { useState, useEffect } from "react";
import SkillItem from "../SkillItem/SkillItem";
import SkillsInput from "../SkillsInput/SkillsInput";
import listStyles from "./SkillsList.module.scss";
import positionPreSetObj from "../../data/positionPreSetObj";

function SkillsList({ position, isFormReset }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    isFormReset ? setList([]) : null;
  }, [isFormReset]);

  useEffect(() => {
    const defaultVal = positionPreSetObj.skillsSet[position] || [];
    setList(defaultVal);
  }, [position]);

  function addSkill(skill) {
    setList((prev) => [skill, ...prev]);
  }
  function removeSkill(id) {
    setList(list.filter((item) => item.id !== id));
  }
  return (
    <div className={listStyles.section}>
      <h3 className={listStyles.title}>Candidate`s technical skills</h3>
      <div className={listStyles.wrapper}>
        <SkillsInput addSkill={addSkill} />
        <ul className={listStyles.list}>
          {list.map((skill) => (
            <SkillItem skill={skill} removeSkill={removeSkill} key={skill.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsList;
