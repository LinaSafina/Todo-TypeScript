import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import './App.css';

function App() {
  return (
    <div className='app'>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
