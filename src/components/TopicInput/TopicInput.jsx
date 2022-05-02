import cn from "classnames";
import React, { useState } from "react";
import inputStyles from "./TopicInput.module.scss";

function TopicInput({ addTopic, hideInput, btnRef }) {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleBlur = (e) => {
    if (e.relatedTarget !== btnRef.current) {
      setInputError(false);
      hideInput();
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setInputError(false);
  };
  const handleAdd = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    if (inputValue.trim() !== "") {
      const topic = {
        name: inputValue,
        rating: 0,
        id: new Date().getTime(),
      };
      addTopic(topic);
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
      <input
        type="text"
        name="topic"
        className={inputField}
        value={inputValue}
        form=""
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleAdd}
        placeholder="Type topic name"
        autoFocus
      />
    </div>
  );
}

export default TopicInput;
