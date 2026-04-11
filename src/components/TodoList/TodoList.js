import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";


export default ({todoList, onDeleted, onToggleImportant, onToggleDone}) => {
    return (
        <ul className="list-group">
            {todoList.map((item) => {
                const {id, ...itemProps} = item;

                return (
                    <li key={id} className="list-group-item py-1 px-3">
                        <TodoListItem {...itemProps}
                                      onDeleted={() => onDeleted(id)}
                                      onToggleImportant={() => onToggleImportant(id)}
                                      onToggleDone={() => onToggleDone(id)}/>
                    </li>
                )
            })}
        </ul>
    )
};