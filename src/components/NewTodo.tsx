import React, { useContext, useRef } from 'react';

import TodosContext from '../store/todos-context';

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredValue = inputRef.current!.value;

    if (enteredValue?.trim().length === 0) {
      alert('Please, enter the task name!');
      return;
    }

    todosCtx.addTodo(enteredValue);
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor='new-todo'>New Todo</label>
      <input
        type='text'
        id='new-todo'
        name='new-todo'
        ref={inputRef}
        // value={newTodo}
        // onChange={changeInputHandler}
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
