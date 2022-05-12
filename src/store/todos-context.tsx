import React, { useState, useEffect } from 'react';

import TodoModel from '../models/TodoModel';

type TodosCtxObject = {
  items: TodoModel[];
  addTodo: (todoText: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosCtxObject>({
  items: [],
  addTodo: (todoText: string) => {},
  deleteTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const savedTodos = localStorage.getItem('todos');
  console.log(savedTodos);
  const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState<TodoModel[]>(parsedTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevState) => [...todos, new TodoModel(todoText)]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const todosValue: TodosCtxObject = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={todosValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
