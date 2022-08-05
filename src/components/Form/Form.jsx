import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const clearForm = () => {
    setName("");
    setAge("");
  };

  const onAddClick = () => {
    props.onAdd({
      name,
      age,
    });
    clearForm();
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "15ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={name}
        onChange={handleNameChange}
        label="Name"
        variant="outlined"
      />

      <TextField
        type="number"
        value={age}
        onChange={handleAgeChange}
        label="Age"
        variant="outlined"
      />

      <Button onClick={onAddClick}>Add</Button>
    </Box>
  );
};

export default Form;
