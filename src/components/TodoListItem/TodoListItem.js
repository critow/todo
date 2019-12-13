import React, {Component} from "react";
import styleList from './TodoListItem.module.sass'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    };

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    };

    render() {
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;
        const {TodoListItem, TodoListItemLabel, TodoListItemDone, TodoListItemImportant} = styleList;

        let labelClasses = TodoListItemLabel;

        if (done) {
            labelClasses += ` ${TodoListItemDone}`;
        }

        if (important) {
            labelClasses += ` ${TodoListItemImportant}`;
        }

        return (
            <span className={TodoListItem}>
                <span
                    className={labelClasses}
                    onClick={this.onLabelClick}>{label}</span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={this.onMarkImportant}>
                <i className="fa fa-exclamation"/>
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                 <i className="fa fa-trash-o"/>
                </button>
            </span>
        )
    }
}