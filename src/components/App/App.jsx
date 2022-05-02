import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import appStyles from "./App.module.scss";
import logo from "../../img/large-logo.svg";
import InfoList from "../InfoList/InfoList";
import infoInputsObj from "../../data/infoInputsObj";
import CheckboxList from "../CheckboxList/CheckboxList";
import checkListObj from "../../data/checkListObj";
import SkillsList from "../SkillsList/SkillsList";
import feedbackAreaObj from "../../data/feedbackAreaObj";
import positionPreSetObj from "../../data/positionPreSetObj";
import FeedbackList from "../FeedbackList/FeedbackList";
import Button from "../Button/Button";

function App() {
  const [position, setPosition] = useState("");
  const [isFormReset, setFormReset] = useState(false);
  useEffect(() => {
    setPosition("");
  }, [isFormReset]);
  const handleSubmit = (e) => {
    e.preventDefault();
    window.print();
  };
  const handleChange = (e) => {
    setPosition(e.target.value);
  };
  const handleReset = () => {
    setFormReset(true);
    localStorage.clear();
  };

  return (
    <div className={appStyles.app}>
      <div className={appStyles.header}>
        <img src={logo} className={appStyles.logo} alt="FiveSysDev logo" />
        <div className={appStyles["position-select"]}>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Position
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={position}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {positionPreSetObj.positionsList.map((item) => (
                <MenuItem value={item.name} key={item.id}>
                  <span className={appStyles["pos-item"]}>{item.name}</span>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <form
        action="#"
        className={appStyles.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
        autoComplete="off"
      >
        <div className={appStyles["content-wrapper"]}>
          <div className={appStyles.content}>
            <h2 className={appStyles["content-title"]}>Interview Feedback</h2>
            <InfoList list={infoInputsObj} isFormReset={isFormReset} />
            <CheckboxList list={checkListObj} />
            <SkillsList position={position} isFormReset={isFormReset} />
          </div>
          <div className={appStyles.content}>
            <FeedbackList list={feedbackAreaObj} isFormReset={isFormReset} />
            <div className={appStyles["button-container"]}>
              <Button value="Save as PDF" type="submit" />
              <Button
                value="Reset Form"
                type="reset"
                action={() => setFormReset(false)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
