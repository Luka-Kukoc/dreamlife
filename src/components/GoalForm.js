import { useState } from "react";
import "./GoalForm.css"

const GoalForm = (props) => {
  const [goal, setGoal] = useState({
    name: props.goal ? props.goal.name : "",
    desc: props.goal ? props.goal.desc : "",
    startDate: props.goal ? props.goal.startDate : "",
    endDate: props.goal ? props.goal.endDate : "",
  });

  const { name, desc, startDate, endDate } = goal;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, desc, startDate, endDate];
    

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const goal = {
        name,
        desc,
        startDate,
        endDate,
      };
      props.handleOnSubmit(goal);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "desc":
      /*if (value === "") {
          setGoal((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;*/
      default:
        setGoal((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="goal-form">
      <form onSubmit={handleOnSubmit}>
        <label>
          Goal name:
          <input
            name="name"
            value={name}
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Goal description:
          <input
            name="desc"
            value={desc}
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start date:
          <input
            name="startDate"
            value={startDate}
            type="date"
            onChange={handleInputChange}
          />
        </label>
        <label>
          End date:
          <input
            name="endDate"
            value={endDate}
            type="date"
            onChange={handleInputChange}
          />
        </label>
       <input type="submit" value="Submit" /> 
      </form>
    </div>
  );
};

export default GoalForm;
