import React, { useState, useEffect } from "react";
import cn from "classnames";
import inputStyles from "./InfoInput.module.scss";

function InfoInput({ input }) {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setTouched] = useState(false);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    inputValue.trim() === "" && isTouched
      ? setInputError(true)
      : setInputError(false);
  }, [inputValue]);

  const inputField = cn(inputStyles.input, {
    [inputStyles.inputError]: inputError,
  });

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
        type={input.type}
        id={input.id}
        defaultValue={input.defaultValue || inputValue}
        name={input.fieldName}
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default InfoInput;
