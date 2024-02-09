import React from "react";
import Button from "../Button";
import "./style.scss";

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00",
  };
  render() {
    return (
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="task">Add a new study</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do u want to study?"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>Add</Button>
      </form>
    );
  }
}

export default Form;
