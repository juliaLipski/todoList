import React, { Component } from 'react';
import Todolist from './Todolist.js';
import Todotaskenter from './Todotaskenter.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      get: '',
      tasks: [{ name: 'do homework1', checked: false }, { name: 'do homework2', checked: false }, { name: 'do homework3', checked: false }]
    }
  }
  clearComplited() {
    let newTasks = this.state.tasks.filter(val => { return val.checked === false })
    this.setState({ tasks: newTasks });
    console.log(newTasks)
  }

  handleChangeChk(event) {
    var name = event.target.value;
    var tempTasks = this.state.tasks;

    tempTasks.forEach(task => {
      if (name === task.name) {
        task.checked ? task.checked = false : task.checked = true;
      }
    })
    this.setState({ tasks: tempTasks });
  }
  handleAdd() {
    let nextItems = this.state.tasks.concat([{ name: this.state.text, checked: false }]);
    this.setState({ tasks: nextItems, text: '' });
  }
  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
  changeSm() {
    this.setState({ world: "world" })
  }
  render() {
    return (
      <div className="app d-flex flex-column justify-content-around align-items-center">
        <Todotaskenter
          text={this.state.text}
          handleTextChange={this.handleTextChange.bind(this)}
          clickHandler={this.handleAdd.bind(this)} />
        <hr />
        <Todolist handleChangeChk={this.handleChangeChk.bind(this)} tasks={this.state.tasks} />
        <button className="btn btn-warning btn-sm" onClick={this.clearComplited.bind(this)}>clear</button>
      </div>
    )
  }
}
