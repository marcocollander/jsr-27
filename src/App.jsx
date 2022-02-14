import "./App.css";
import People from "./components/People";
import Courses from "./components/Courses";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <People />
        <Courses />
      </header>
    </div>
  );
};

export default App;
