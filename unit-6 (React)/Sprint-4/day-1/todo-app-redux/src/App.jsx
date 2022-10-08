import logo from './logo.svg';
import './App.css';
import { TodoList } from './components/Home';
import { Navbar } from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import { Createtodo } from './components/Createtodo';
import { TodoItem } from './components/TodoItem';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<TodoList/> }></Route>
        <Route path='/createtodo' element={<Createtodo/>}></Route>
        <Route path='/Todos/:TodoId' element={<TodoItem/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
