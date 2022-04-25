import { useContext } from 'react';

import Todo from './Todo';
import TodosContext from '../store/todos-context';

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items.map((todo) => (
        <Todo
          text={todo.text}
          key={todo.id}
          onDelete={todosCtx.deleteTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
