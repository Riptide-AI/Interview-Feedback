import React, { useState, useRef } from "react";
import Rating from "@mui/material/Rating";

import SkillTopic from "../SkillTopic/SkillTopic";
import TopicInput from "../TopicInput/TopicInput";
import skillStyles from "./SkillItem.module.scss";

function SkillItem({ skill, removeSkill }) {
  const [rating, setRating] = useState(skill.rating);
  const [list, setList] = useState(skill.topics || []);
  const [isOpen, setOpen] = useState(false);

  const topicInputBtnRef = useRef();

  function handleDelete() {
    removeSkill(skill.id);
  }

  function addTopic(topic) {
    setList((prev) => [topic, ...prev]);
  }

  function openTab() {
    setOpen(!isOpen);
  }
  function hideInput() {
    setOpen(false);
  }
  function removeTopic(id) {
    setList(list.filter((item) => item.id !== id));
  }
  return (
    <div className={skillStyles.wrapper}>
      <div className={skillStyles.header}>
        <div className={skillStyles.section}>
          <div className={skillStyles.name}>{skill.name}</div>
          {list.length === 0 ? (
            <div className={skillStyles.rating}>
              <Rating
                name="simple-controlled"
                size="large"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </div>
          ) : null}
        </div>

        <div className={skillStyles["btn-wrap"]}>
          <button
            type="button"
            ref={topicInputBtnRef}
            className={skillStyles["add-btn"]}
            onClick={openTab}
          >
            <span className="material-symbols-outlined">
              {!isOpen ? "add" : "remove"}
            </span>
          </button>
          <button
            type="button"
            className={skillStyles["close-btn"]}
            onClick={handleDelete}
          >
            <span className="material-symbols-outlined ">close</span>
          </button>
        </div>
      </div>

      <div className={skillStyles["input-wrapper"]}>
        {isOpen ? (
          <TopicInput
            addTopic={addTopic}
            hideInput={hideInput}
            btnRef={topicInputBtnRef}
          />
        ) : null}
      </div>
      <div className={skillStyles.topics}>
        {list.map((item) => (
          <SkillTopic topic={item} removeTopic={removeTopic} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default SkillItem;
