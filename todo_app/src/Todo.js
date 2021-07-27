import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Today" />
      </ListItem>
    </List>
  );
}

export default Todo;
