import React from "react";
import InfoInput from "../InfoInput/InfoInput";
import listStyles from "./InfoList.module.scss";

function InfoList({ list }) {
  return (
    <div className={listStyles.list}>
      {list.inputs.map((item) => {
        return <InfoInput input={item} key={item.id} />;
      })}
    </div>
  );
}

export default InfoList;
