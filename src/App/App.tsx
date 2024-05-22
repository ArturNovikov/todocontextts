import React from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import TodoList from "../components/TodoList/TodoList";
import styles from "./App.module.scss";

const App: React.FC = () => {

    return(
        <div className={styles.app}>
            <h1>To Do</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default App;