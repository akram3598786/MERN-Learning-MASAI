
import './App.css';
import ParentFun from "./components/Child-Parent/Parent";
import Parent_Childfun from "./components/Parent-Child/Parent";
import UseReeducer from "./components/UseReducer"

function App() {
  return (
    <div className="App">
     <h1>Hello CodeSandbox</h1> 
     {/* <ParentFun/>  */}
     <Parent_Childfun/>
     <UseReeducer/>
     
    </div>
  );
}

export default App;
