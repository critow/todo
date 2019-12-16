import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import styleList from './TodoList.module.sass'


export default ({todoList, onDeleted, onToggleImportant, onToggleDone}) => {
    const {TodoList} = styleList;
    return (
        <ul className={`list-group ${TodoList}`}>
            {todoList.map((item) => {
                const {id, ...itemProps} = item;

                return (
                    <li key={id} className="list-group-item">
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