import React, {Component} from "react";
import styleList from './SearchPanel.module.sass';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = event => {
        const term = event.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        const {SearchInput} = styleList;
        return <input type="text"
                      className={`${SearchInput} form-control`}
                      placeholder="type to search"
                      value={this.state.term}
                      onChange={this.onSearchChange}/>;
    }
};