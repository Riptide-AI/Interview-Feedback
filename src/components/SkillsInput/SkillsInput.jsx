import cn from "classnames";
import React, { useRef, useState } from "react";
import inputStyles from "./SkillsInput.module.scss";

function SkillsInput({ addSkill }) {
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const skillBtnRef = useRef();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setInputError(false);
  };
  const openTab = () => {
    setOpen(!isOpen);
    setInputValue("");
  };
  const handleBlur = (e) => {
    if (e.relatedTarget !== skillBtnRef.current) {
      setInputError(false);
      setOpen(false);
    }
  };
  const addItem = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    if (inputValue.trim() !== "") {
      const skillItem = {
        name: inputValue,
        rating: 0,
        id: new Date().getTime(),
        topics: [],
      };
      addSkill(skillItem);
      setInputValue("");
    } else {
      setInputError(true);
    }
  };
  const inputField = cn(inputStyles.input, {
    [inputStyles["input-error"]]: inputError,
  });
  return (
    <div className={inputStyles.wrapper}>
      <button
        type="button"
        ref={skillBtnRef}
        onClick={openTab}
        aria-label="Close"
        className={
          !isOpen
            ? inputStyles["open-btn"]
            : cn(inputStyles["open-btn"], inputStyles["opened-btn"])
        }
      />

      {isOpen ? (
        <input
          type="text"
          name="skill"
          className={inputField}
          value={inputValue}
          onBlur={handleBlur}
          form=""
          onChange={handleChange}
          onKeyDown={addItem}
          placeholder="Type skill name"
          autoFocus
        />
      ) : null}
    </div>
  );
}

export default SkillsInput;
