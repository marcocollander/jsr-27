import React from "react";
import _ from "lodash";

const PeopleList = ({ people }) => {
  return (
    <ul>
      {_.take(
        people.map(({ id, name }) => <li key={id}>{name}</li>),
        3
      )}
    </ul>
  );
};

export default PeopleList;
