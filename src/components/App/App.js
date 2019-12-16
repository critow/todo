import React, {Component} from "react";

import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import TodoList from "../TodoList/TodoList";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import styleList from "./App.module.sass";

export default class App extends Component {

    maxId = 1;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all' //active, all, done
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = id => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex(element => element.id === id);
            const newArray = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

            return {
                todoData: newArray
            };
        });
    };

    addItem = text => {
        // generate id
        const newItem = this.createTodoItem(text);

        //add element in array
        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        })
    };

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex(element => element.id === id);

        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    }

    onToggleDone = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    onToggleImportant = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onSearchChange = term => {
        this.setState({term});
    };

    search(items, term) {
        if (term === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    onFilterChange = filter => {
        this.setState({filter});
    };

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    render() {
        const {TodoApp, TopPanel} = styleList;
        const {todoData, term, filter} = this.state;

        const doneCount = todoData.filter(el => el.done).length;
        const todoCount = todoData.length - doneCount;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        return (
            <div className={TodoApp}>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className={`${TopPanel} d-flex`}>
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter}
                                      onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todoList={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <ItemAddForm onAdded={this.addItem}/>
            </div>
        )
    }
};