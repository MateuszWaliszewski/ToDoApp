import React from "react";

const ShowTask = props => {
  const piority = () => {
    return { color: "red" };
  };
  if (props.task.active) {
    return (
      <div>
        <span style={props.task.piority ? piority() : null}>
          {props.task.title} | utworzone {props.task.startDate}
        </span>
        <button>Zrobione!</button>
        <button>X</button>
      </div>
    );
  } else {
    return (
      <div>
        <span>
          {props.task.title} | zrobione {props.task.finishDate}
        </span>
        <button>X</button>
      </div>
    );
  }
};

export default ShowTask;
