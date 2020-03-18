import React, { Component } from "react";

class InputAddTask extends Component {
  state = {
    taskText: "",
    piority: false,
    finishDate: ""
  };

  handleInputText = e => {
    this.setState({
      taskText: e.target.value
    });
  };

  handleInputCheckbox = e => {
    this.setState({
      piority: e.target.checked
    });
  };

  handleDate = e => {
    this.setState({
      finishDate: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { taskText, piority, finishDate } = this.state;
    const checkAdd = this.props.addTask(taskText, piority, finishDate);
    if (checkAdd) {
      console.log("super");
      this.setState({
        taskText: "",
        piority: false,
        finishDate: ""
      });
    }
  };

  render() {
    const { taskText, piority, finishDate } = this.state;
    return (
      <form>
        <label>Wpisz zadanie do zrobienia</label>
        <input type="text" value={taskText} onChange={this.handleInputText} />
        <br />
        <label>Piorytet?</label>
        <input
          type="checkbox"
          value={piority}
          onChange={this.handleInputCheckbox}
        />
        <br />
        <label>Do kiedy zadanie musi zostać zrobione?</label>
        <input type="date" value={finishDate} onChange={this.handleDate} />
        <br />
        <button onClick={this.handleClick}>Dodaj zadanie</button>
      </form>
    );
  }
}

export default InputAddTask;
