import React, {Component} from "react";

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
        return (
            <form className="flex mt-[10px]"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control mr-[3px]"
                       placeholder="Enter task"
                       onChange={this.onLabelChange}
                       value={this.state.label}/>
                <button className="btn btn-outline-secondary whitespace-nowrap">Add Task</button>
            </form>
        );
    }
}