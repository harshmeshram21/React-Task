import logo from "./logo.svg";
import "./App.css";
import Count from "./components/Count";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <div className="App">
      <Count></Count>
      <ToDoList />
    </div>
  );
}

export default App;
