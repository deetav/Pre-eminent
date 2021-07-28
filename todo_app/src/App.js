import { valueToNode } from "@babel/types";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState(['abs','sba']);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);
  const addTodo = (event) => {
    event.preventDefault();
    console.log("Im killing !!!!");
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello React !</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Task</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          onClick={addTodo}
          type="form"
          variant="contained"
          color="primary"
        >
          Add Task
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
