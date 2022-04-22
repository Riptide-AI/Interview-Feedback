import React, { useState, useEffect } from "react";
import cn from "classnames";
import inputStyles from "./FeedbackArea.module.scss";

function FeedbackArea({ area }) {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setTouched] = useState(false);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    inputValue.trim() === "" && isTouched && area.required
      ? setInputError(true)
      : setInputError(false);
  }, [inputValue]);

  const inputField = cn(inputStyles.textarea, {
    [inputStyles["input-error"]]: inputError,
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setTouched(true);
  };

  return (
    <div className={inputStyles.wrapper}>
      <label className={inputStyles.label} htmlFor={area.id}>
        {area.label}
      </label>
      <textarea
        className={inputField}
        id={area.id}
        value={inputValue}
        name={area.name}
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default FeedbackArea;
