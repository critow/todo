import React, {Component} from "react";
import styleList from './ItemAddForm.module.sass';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = event => {
        this.setState({
            label: event.target.value
        })
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {
        const {ItemAddForm} = styleList;

        return (
            <form className={`${ItemAddForm} d-flex`}
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       placeholder="Enter task"
                       onChange={this.onLabelChange}
                       value={this.state.label}/>
                <button className="btn btn-outline-secondary">Add Task</button>
            </form>
        );
    }
}