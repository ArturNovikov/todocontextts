import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import styles from "./TodoList.module.scss";

const TodoList = () => {

    const todoContext = useContext(TodoContext);

    if(!todoContext) {
        return null;
    }

    const { todos, removeTodo, toggleTodo } = todoContext; 

    return(
        <ul className={styles.todoList} >
            {todos && todos.map(({ id, text, completed }) => 
                <li key={id} >
                <span
                style={{ 
                    textDecoration: completed ? "line-through" : "none",
                }}
                onClick={() => toggleTodo(id)}
                >
                    {text}
                </span>
                <button
                type="button"
                onClick={() => removeTodo(id)}
                >Delete Task</button>
                </li>
            )}
        </ul>
    );
};

export default TodoList;