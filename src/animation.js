import React, { Component } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

class Animation extends Component {
  state = {
    showList: true,
    highlightedHobby: false
  };

  switch = () => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }));
  };

  listSwitch = () => {
    this.setState(state => ({
      highlightedHobby: !state.highlightedHobby
    }));
  };

  render() {
    return (
      <div className="container">
        <button className="display" onClick={this.switch}>
          Tasks To Do!
        </button>
        <CSSTransition
          in={this.state.showList}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={this.listSwitch}
          onExit={this.listSwitch}
        >
          <div className="list-body">
            <ul className="list">
              <li
                className={cx("list-item", {
                  "list-item--active": this.state.highlightedHobby
                })}
              >
                IP ASSIGNMENT 10!
              </li>
              <li className="list-item"> Mini Project</li>
              <li className="list-item"> Running</li>
              <li className="list-item"> Gym</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Animation;

