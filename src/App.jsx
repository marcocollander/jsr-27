import "./App.css";
import People from "./components/People";
import Courses from "./components/Courses";
import Text from "./components/Text";
import Form from "./components/form/Form";
import Currencies from "./components/Currencies/Currencies";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Currencies />
        <Form />
        <Text text={"Hello, world"} />
        <People />
        <Courses />
      </header>
    </div>
  );
};

export default App;
