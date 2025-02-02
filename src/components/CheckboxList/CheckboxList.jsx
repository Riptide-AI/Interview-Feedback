import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import listStyles from "./CheckboxList.module.scss";

function CheckboxList({ list }) {
  return (
    <div className={listStyles.section}>
      <h3 className={listStyles.title}>
        Candidate is a good fit for this position
      </h3>
      <ul className={listStyles.list}>
        {list.checks.map((item) => (
          <Checkbox checkboxData={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default CheckboxList;
