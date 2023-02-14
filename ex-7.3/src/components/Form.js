import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const [freeText, setfreeText] = useState("");
  // callback func from App - setData
  const setParentState = props.setParentState;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = {
          firstName,
          lastName,
          age,
          freeText,
        };
        setParentState(formData);
      }}
    >
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e) => {
          setfirstName(e.target.value);
        }}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={(e) => {
          setlastName(e.target.value);
        }}
      />
      <br />
      <label htmlFor="age">Age:</label>
      <select
        name="age"
        value={age}
        onChange={(e) => {
          setage(e.target.value);
        }}
      >
        <option value="0-15">0-15</option>
        <option value="16-100+">16-100+</option>
      </select>
      <label htmlFor="freeText">Free Text:</label>
      <textarea
        name="freeText"
        value={freeText}
        onChange={(e) => {
          setfreeText(e.target.value);
        }}
      />
      <button type="submit">Continue</button>
    </form>
  );
};

export default Form;
