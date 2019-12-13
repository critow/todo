import React from "react";
import styleList from './AppHeader.module.sass'

export default ({toDo, done}) => {
    const {AppHeader} = styleList;

    return (
        <div className={`${AppHeader} d-flex`}>
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
};