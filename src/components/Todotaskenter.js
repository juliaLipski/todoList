import React, { Component } from 'react';

class Todotaskenter extends Component {

    render() {
        return (
            <div className="fr d-flex justify-content-around align-items-center">
                <div>
                    <input className="inp form-control" type="text" onChange={(event) => this.props.handleTextChange(event)} />
                </div>
                <button className="btn btn-primary" onClick={this.props.clickHandler}>Add</button>
            </div>

        );
    }
}
export default Todotaskenter;