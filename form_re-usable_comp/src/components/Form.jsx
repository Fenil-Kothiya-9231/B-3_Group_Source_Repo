import React, { useState } from "react";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";
import CheckboxGroup from "./CheckboxGroup";


const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, gender, interests };
    onSubmit(formData);
    setName("");
    setEmail("");
    setGender("");
    setInterests([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput 
        label="Name:"
        value={id}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        label="Email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <RadioInput
        label="Gender:"
        name="gender"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
        selectedValue={gender}
        onChange={(e) => setGender(e.target.value)}
      />

      <CheckboxGroup  
        label="Interests:"
        name="interests"
        options={[
          { label: "Sports", value: "sports" },
          { label: "Music", value: "music" },
          { label: "Reading", value: "reading" },
        ]}
        selectedValues={interests}
        onChange={(e) => {
          const value = e.target.value;
          setInterests((prevInterests) => {
            if (prevInterests.includes(value)) {
              return prevInterests.filter((interest) => interest !== value);
            } else {
              return [...prevInterests, value];
            }
          });
        }}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
