import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // MODEL
  const INIT_COURSES = [
    {
      id: uuidv4(),
      name: "Frontend",
    },
  ];
  const [courses, setCourses] = useState(INIT_COURSES); // uzycie REACT HOOK

  // UPDATE
  const addCourse = (e) => {
    e.preventDefault();

    const { name } = e.currentTarget.elements;
    const newCourse = { id: uuidv4(), name: name.value };

    setCourses((state) => [...state, newCourse]);
  };
  const deleteCourse = (courseId) => {
    setCourses((state) => state.filter(({ id }) => id !== courseId));
  };

  return (
    // VIEW
    // JSX
    <div className="App">
      <header className="App-header">
        <form onSubmit={addCourse}>
          <input type="text" name="name" defaultValue={"Backend"} />
          <button>Add</button>
        </form>
        <ul>
          {courses.map(({ id, name }) => (
            <li key={id}>
              name: {name}{" "}
              <button onClick={(e) => deleteCourse(id)}>delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
