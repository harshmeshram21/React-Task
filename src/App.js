import "./App.css";
import Count from "./components/Count";
import CountdownTmer from "./components/CountdownTmer";
import ToDo from "./components/ToDo";
import Vote from "./components/Vote";

function App() {
  return (
    <div className="App">
      <Count></Count>
      {/* <ToDoList /> */}
      <ToDo />
      <CountdownTmer duration={1000 * 60 * 40} />
      <Vote></Vote>
    </div>
  );
}

export default App;
