import React from "react";
import SideInfo from "./SideInfo";
import { useState } from "react";

function Form({ newStudent }) {
  const [query, SetQuery] = useState({
    id: "",
    name: "",
    lastName: "",
    phoneNumber: "",
    power: "",
    emailAddress: "",
  });

  const handleChange = (e) => {
    SetQuery({ ...query, [e.target.name]: e.target.value }); //need to give it id 1?
  };
  //SetQuery({ ...query, name: e.target.value })} in order to have a interchangable "keys"
  // in objects we could change "name" or "lastName" to [e.target.name]. this will use the name
  // that is assigned per input such as name="phoneNumber" check power  input and email input as examples
  // the [] is used to label the key
  //  onChange={(e) => SetQuery({ ...query, name: e.target.value })} we are setting each
  // element inside the SetQuery which goes to query.
  const handleSubmit = (e) => {
    // console.log(query);
    e.preventDefault(); // to prevent the page refreshing
    newStudent(query); // we are sending our "query" to newstudent
    // newStudent is a function in apps.js that adds my values to the array of students
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        {/* onSubmit={handleSubmit} in line 20 will active line 15 when i click submit, notce ---- i can put any function i want and activite it when i submit */}
        {/* <input/> is bar that you mention youur input, placeholder is what you what written in this input */}
        <input
          name="name"
          // line 25 is a faster/cleaner method then writting SetQuery({ ...query, name: e.target.value }
          required
          placeholder="what is your first name?"
          onChange={(e) => SetQuery({ ...query, name: e.target.value })}
        />
        {/* if i use an input called select, it would have an openning and closing tag
        <select></select> and inside the tags we would use <option value=high > 10 </option>  */}
        <input
          name="lastName"
          required
          placeholder="what is your lastName name?"
          onChange={(e) => SetQuery({ ...query, lastName: e.target.value })}
        />
        {/* ...query is keeping variable and changes a priority in that object */}
        <input
          name="phoneNumber"
          required
          placeholder="what is your phoneNumber name?"
          onChange={(e) => SetQuery({ ...query, phoneNumber: e.target.value })}
        />
        <input
          name="power"
          required
          placeholder="what is your power name?"
          onChange={handleChange}
        />
        <input
          name="emailAddress"
          required
          placeholder="what is your email Address name?"
          onChange={handleChange}
        />

        <button type="submit">Submit details</button>
        {/* we add the button inside the form, because its all related to the inputs
        we need to create a type="submit" at the end of the form and onSubmit at the start (e.g line 18)
          */}
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;

// name done
// lastName
// phoneNumber
// power (in three words)
// emailAddress
