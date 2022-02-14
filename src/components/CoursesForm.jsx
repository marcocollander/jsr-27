const CoursesForm = ({ addCourse }) => {
  return (
    <form onSubmit={addCourse}>
      <input type="text" name="name" defaultValue={"Backend"} />
      <button>Add</button>
    </form>
  );
};

export default CoursesForm;
