import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Form from "../Form/Form";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicCard() {
  const [count, setCount] = useState(0);

  const [list, setList] = useState([]);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const onAdd = (values) => {
    setList((prevState) => [...prevState, values]);
  };

  return (
    <Card sx={{ minWidth: 275, margin: 10 }}>
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2}>
            {list.map((item, index) => (
              <Item key={item.name + index}>
                {item.name}: {item.age}
              </Item>
            ))}
          </Stack>
        </Box>

        <Form onAdd={onAdd} />

        <Typography variant="h5" component="div">
          {count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDecrement} variant="contained" size="small">
          Decrement
        </Button>
        <Button onClick={handleIncrement} variant="contained" size="small">
          INCREMENT
        </Button>
      </CardActions>
    </Card>
  );
}
