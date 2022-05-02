import getTodayDate from "../scripts/getTodayDate";

const infoInputsObj = {
  inputs: [
    {
      label: "Candidate name",
      type: "text",
      id: 1,
      name: "name",
    },
    {
      label: "Position",
      type: "text",
      id: 2,
      name: "position",
    },
    {
      label: "Interviewer name",
      type: "text",
      id: 3,
      name: "interviewer",
    },
    {
      label: "Interview date",
      type: "date",
      id: 4,
      defaultValue: getTodayDate(),
      name: "date",
    },
  ],
};

export default infoInputsObj;
