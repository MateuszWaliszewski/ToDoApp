import React from "react";
import ShowTask from "./ShowTask";

const ActiveTasksList = props => {
  let tasks = [...props.tasks];
  tasks = tasks.map(task => <ShowTask key={task.id} task={task} />);
  return <div>{tasks}</div>;
};

export default ActiveTasksList;
