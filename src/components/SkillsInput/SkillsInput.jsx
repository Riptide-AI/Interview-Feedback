import React, { useState } from "react";
import cn from "classnames";
import inputStyles from "./SkillsInput.module.scss";

function SkillsInput({ addSkill }) {
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setInputError(false);
  };
  const openTab = () => {
    setOpen(!isOpen);
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
        onClick={openTab}
        className={
          !isOpen
            ? inputStyles["open-btn"]
            : cn(inputStyles["open-btn"], inputStyles["opened-btn"])
        }
      >
        &#10005;
      </button>
      {isOpen ? (
        <input
          type="text"
          name="skill"
          className={inputField}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={addItem}
          maxLength="40"
          autoFocus={isOpen}
        />
      ) : null}
    </div>
  );
}

export default SkillsInput;
