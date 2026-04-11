import React from "react";

export default ({toDo, done}) => {
    return (
        <div className="flex items-end">
            <h1 className="flex-1">Todo List</h1>
            <h2 className="text-xl text-gray-500">{toDo} more to do, {done} done</h2>
        </div>
    );
};