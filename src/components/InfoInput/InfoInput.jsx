import React, { useState, useEffect } from "react";
import cn from "classnames";
import inputStyles from "./InfoInput.module.scss";

function InfoInput({ input, isFormReset }) {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem(input.name) || ""
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
    inputValue.trim() === "" && isTouched
      ? setInputError(true)
      : setInputError(false);
  }, [inputValue]);

  const inputField = cn(inputStyles.input, {
    [inputStyles["input-error"]]: inputError,
  });
  const handleBlur = () => {
    localStorage.setItem(input.name, inputValue);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setTouched(true);
  };

  return (
    <div className={inputStyles.wrapper}>
      <label className={inputStyles.label} htmlFor={input.id}>
        {input.label}
      </label>
      <input
        className={inputField}
        name={input.name}
        type={input.type}
        id={input.id}
        defaultValue={input.defaultValue || inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
    </div>
  );
}

export default InfoInput;
