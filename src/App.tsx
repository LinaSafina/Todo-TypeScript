import Todos from './components/Todos';
import './App.css';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <div className='App'>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
