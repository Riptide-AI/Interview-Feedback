import React from "react";
import listStyles from "./Checkbox.module.scss";

function Checkbox({ checkboxData }) {
  return (
    <li className={listStyles.wrapper}>
      <input
        className={listStyles.radio}
        type={checkboxData.type}
        id={checkboxData.id}
        name={checkboxData.name}
        required
      />
      <label className={listStyles.label} htmlFor={checkboxData.id}>
        {checkboxData.label}
      </label>
    </li>
  );
}

export default Checkbox;
