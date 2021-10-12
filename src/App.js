import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const newStudent = (newstudent) => {
    const id = studentsInfo.length + 1; // im setting id as the length of the array+1
    // console.log(id);
    const nstudents = { ...newstudent, id: id }; //i'm setting the student.id as studentsInfo.length + 1
    // console.log(nstudents);
    // console.log(newstudent);
    setStudentsInfo([...studentsInfo, nstudents]);

    // newStudent is a function that is given to forms
    // to add my new values to the array of students information
  };
  const deleteStudent = (id) => {
    let TemptASK = studentsInfo.filter((student) => student.id !== id);
    setStudentsInfo(TemptASK);

    // console.log(id);
  };

  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList list={studentsInfo} deleteStudent={deleteStudent} />
      ) : (
        <Form newStudent={newStudent} />
      )}
    </div>
  );
}

export default App;
