import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Todo/>
    </div>
  );
}

export default App;
