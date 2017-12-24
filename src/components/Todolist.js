import React, { Component } from 'react';

class Todolist extends Component {

    render() {
        let ts = this.props.tasks.map((task, i) => <li key={i}
            style={{
                textDecoration: task.checked ? 'line-through' : 'none',
                color: task.checked ? 'gray' : 'black'
            }}>
            <input className="cbx" type="checkbox" value={task.name}
                onChange={(event) => this.props.handleChangeChk(event)} />
            {task.name}</li>)
        return (
            <div className=''>
                <ol className="d-flex flex-column justify-content-around align-items-start">
                    {ts}
                </ol>
            </div>
        );
    }
}

export default Todolist;