import React, { Component } from "react";
import "./App.css";
import InputAddTask from "./InputAddTask";
import ActiveTasksList from "./ActiveTasksList";
import DoneTasksList from "./DoneTasksList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "zrobić obiad",
        piority: false,
        active: true,
        startDate: "2020-03-10",
        finishDate: "2020-03-12"
      }
    ]
  };

  addTask = (text, piority, date) => {
    return true;
  };

  render() {
    const activeTasks = [...this.state.tasks].filter(task => task.active);
    const doneTasks = [...this.state.tasks].filter(task => !task.active);

    return (
      <div className="App">
        <InputAddTask addTask={this.addTask} />
        <hr />
        <ActiveTasksList tasks={activeTasks} />
        <hr />
        <DoneTasksList tasks={doneTasks} />
      </div>
    );
  }
}

export default App;
