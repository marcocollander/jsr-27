import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import CoursesForm from "./CoursesForm";
import CoursesList from "./CoursesList";

const Courses = () => {
  // MODEL
  const INIT_COURSES = [
    {
      id: uuidv4(),
      name: "Frontend",
    },
  ];
  const [courses, setCourses] = useState(INIT_COURSES);
  // uzycie REACT HOOK

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
    <>
      <Header title={"Courses"} />
      <CoursesForm addCourse={addCourse} />
      <CoursesList
        courses={courses}
        deleteCourse={deleteCourse}
        isOrdered={true}
      />
    </>
  );
};

export default Courses;
