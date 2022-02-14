import React from "react";
import people from "./../data/people";
import Header from "./Header";
import PeopleList from "./PeopleList";

const People = () => {
  return (
    <>
      <Header title={"People"} />
      <PeopleList people={people} />
    </>
  );
};

export default People;
