import React, { createContext, useState, ReactNode } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

let id = 1;

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        setTodos([...todos, {
            id: id++,
            text: text,
            completed: false
        }])
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo,
            completed: !todo.completed,
        } : todo));
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return(
        <TodoContext.Provider value={{todos, addTodo, removeTodo, toggleTodo}}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoProvider, TodoContext };