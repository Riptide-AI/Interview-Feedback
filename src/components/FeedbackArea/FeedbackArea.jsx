import React, { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import cn from "classnames";
import inputStyles from "./FeedbackArea.module.scss";

function FeedbackArea({ area, isFormReset }) {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem(area.name) || ""
  );
  const [isTouched, setTouched] = useState(false);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (isFormReset) {
      setInputValue("");
      setInputError(false);
      setTouched(false);
    }
  }, [isFormReset]);

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
  const handleBlur = () => {
    localStorage.setItem(area.name, inputValue);
  };

  return (
    <div className={inputStyles.wrapper}>
      <label className={inputStyles.label} htmlFor={area.id}>
        {area.label}
      </label>
      <TextareaAutosize
        aria-label="textarea"
        className={inputField}
        id={area.id}
        value={inputValue}
        name={area.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={area.placeholder || ""}
        required={area.required}
      />
    </div>
  );
}

export default FeedbackArea;
