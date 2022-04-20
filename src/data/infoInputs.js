import getTodayDate from "../scripts/getTodayDate";

const infoInputsObj = {
  inputs: [
   { 
      label: "Candidate name",
      type: "text",
      id: 1, 
      fieldName: "name" 
   },
   { 
      label: "Position",
      type: "text",
      id: 2,
      fieldName: "position"
   },
   {
      label: "Interviewer name",
      type: "text",
      id: 3,
      fieldName: "interviewer",
   },
   {
      label: "Candidate name",
      type: "date",
      id: 4,
      value: getTodayDate(),
      fieldName: "date",
   },
  ],
};

export default infoInputsObj;
