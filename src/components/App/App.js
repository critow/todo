import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import TodoList from "../TodoList/TodoList";
import styleList from "./App.module.sass";

export default () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];

    const {TodoApp, TopPanel} = styleList;

    return (
        <div className={TodoApp}>
            <AppHeader toDo={1} done={3}/>
            <div className={`${TopPanel} d-flex`}>
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todoList={todoData}/>
        </div>
    )
};