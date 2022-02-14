const CoursesList = ({ courses, deleteCourse }) => {
  return (
    <ul>
      {courses.map(({ id, name }) => (
        <li key={id}>
          name: {name} <button onClick={(e) => deleteCourse(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
