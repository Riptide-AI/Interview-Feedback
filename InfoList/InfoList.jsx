import React from "react";
import InfoInput from "../InfoInput/InfoInput";
import listStyles from "./InfoList.module.scss";

function InfoList({ list, isFormReset }) {
  return (
    <div className={listStyles.section}>
      {list.inputs.map((item) => (
        <InfoInput input={item} key={item.id} isFormReset={isFormReset} />
      ))}
    </div>
  );
}

export default InfoList;
