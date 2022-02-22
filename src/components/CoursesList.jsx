const CoursesList = ({ courses, deleteCourse, isOrdered }) => {
  const TagName = isOrdered ? "ol" : "ul";

  return (
    <TagName>
      {courses.map(({ id, name }) => (
        <li key={id}>
          name: {name} <button onClick={(e) => deleteCourse(id)}>delete</button>
        </li>
      ))}
    </TagName>
  );
};

export default CoursesList;
