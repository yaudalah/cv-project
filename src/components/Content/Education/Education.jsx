import React from "react";

const Education = ({title, major, grade, address, year }) => {
  return (
    <ul>
      <h2>
        {title}, {major}, {grade}
      </h2>
      <p>{address}</p>
      <p>{year}</p>
    </ul>
  );
};

export default Education;
