import React, { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import styles from "./AddTodo.module.scss";

const AddTodo = () => {
    const [text, setText] = useState("");
    const todoContext = useContext(TodoContext);

    if(!todoContext) {
        return null;
    }

    const { addTodo } = todoContext;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return(
        <>
        <form
        className={styles.addTodo}
        onSubmit={handleSubmit}>
            <input
            type="text"
            value={text}
            onChange={ e => setText(e.target.value)}
            />
            <button
            type="submit"
            >Add Todo</button>
        </form>
        </>
    );
};

export default AddTodo;