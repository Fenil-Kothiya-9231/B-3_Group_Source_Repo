import React from "react";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const handleSubmit = (formData) => {
    // Handle form submission logic with the form data
    console.log(formData);
  };

  return (
    <div className="App">
      <h1>Form Example</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
