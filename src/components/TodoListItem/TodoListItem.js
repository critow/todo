import React from "react";
import styleList from './TodoListItem.module.sass'

export default ({label, onDeleted, onToggleImportant, onToggleDone, important, done}) => {
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
                    onClick={onToggleDone}>{label}</span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={onToggleImportant}>
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