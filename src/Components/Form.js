import React from "react";
import SideInfo from "./SideInfo";
import { useState } from "react";

function Form() {
  const [query, SetQuery] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    power: "",
    emailAddress: "",
  });
  //  onChange={(e) => SetQuery({ ...query, name: e.target.value })} we are setting each
  // element inside the SetQuery which goes to query.
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // to prevent the page refreshing
  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        {/* onSubmit={handleSubmit} in line 20 will active line 15 when i click submit, notce ---- i can put any function i want and activite it when i submit */}
        {/* <input/> is bar that you mention youur input, placeholder is what you what written in this input */}
        <input
          required
          placeholder="what is your first name?"
          onChange={(e) => SetQuery({ ...query, name: e.target.value })}
        />
        {/* if i use an input called select, it would have an openning and closing tag
        <select></select> and inside the tags we would use <option value=high > 10 </option>  */}
        <input
          required
          placeholder="what is your lastName name?"
          onChange={(e) => SetQuery({ ...query, lastName: e.target.value })}
        />
        {/* ...query is keeping variable and changes a priority in that object */}
        <input
          required
          placeholder="what is your phoneNumber name?"
          onChange={(e) => SetQuery({ ...query, phoneNumber: e.target.value })}
        />
        <input
          required
          placeholder="what is your power name?"
          onChange={(e) => SetQuery({ ...query, power: e.target.value })}
        />
        <input
          required
          placeholder="what is your email Address name?"
          onChange={(e) => SetQuery({ ...query, emailAddress: e.target.value })}
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
