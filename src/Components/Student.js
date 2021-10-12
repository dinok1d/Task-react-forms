import React from "react";

function Student(props) {
  const student = props.student;
  return (
    <div className="student">
      <p>{student.name}</p>
      <p>{student.lastName}</p>
      <ul>
        <li>phone number :{student.phoneNumber}</li>
        <li>power: {student.power}</li>
        <li>Student ID :{student.id}</li>
      </ul>
      <p
        onClick={() => {
          props.deleteStudent(student.id);
          //   i passed a function from app.js that deletes the student by ID
        }}
        className="delete"
      >
        delete
      </p>
    </div>
  );
}

export default Student;
