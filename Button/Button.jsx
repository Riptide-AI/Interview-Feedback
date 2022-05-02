import React from "react";
import buttonStyles from "./Button.module.scss";

function Button({ value, type, action }) {
  return (
    <button
      type={type || "button"}
      className={buttonStyles.button}
      onClick={action || null}
    >
      {value || "button"}
    </button>
  );
}

export default Button;
