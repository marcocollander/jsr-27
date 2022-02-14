const Header = ({ title }) => {
  let color;
  if (title === "People") {
    color = "#802597";
  } else if (title === "Courses") {
    color = "#102597";
  } else {
    color = "#fff";
  }
  const style = {
    color,
    fontWeight: "400", // don't do font-weight (!)
  };

  return (
    <h3 className="Header" style={style}>
      {title}
    </h3>
  );
};

export default Header;
