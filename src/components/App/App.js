import React, {Component} from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import TodoList from "../TodoList/TodoList";
import styleList from "./App.module.sass";

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ],
    };

    deleteItem = id => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex(element => element.id === id);
            const newArray = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

            return {
                todoData: newArray
            };
        });
    };

    render() {
        const {TodoApp, TopPanel} = styleList;

        return (
            <div className={TodoApp}>
                <AppHeader toDo={1} done={3}/>
                <div className={`${TopPanel} d-flex`}>
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todoList={this.state.todoData}
                          onDeleted={this.deleteItem}/>
            </div>
        )
    }
};