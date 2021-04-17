import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";

const TasksItem = ({ todo, inProgress, id }) => {
  const toggleInProgress = () => {
    db.collection("tasks").doc(id).update({
      inProgress: !inProgress,
    });
  };

  const deleteTasks = () => {
    db.collection("tasks").doc(id).delete();
  };

  return (
    <div style={{ display: "flex", marginRight: "5rem", marginLeft: "2rem" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inProgress ? "Not Completed" : "Completed"}
        />
      </ListItem>
      <Button
        onClick={toggleInProgress}
        style={{
          color: "#2f5d62",
        }}
      >
        {" "}
        {inProgress ? "!Done " : "Done ✔️"}{" "}
      </Button>
      <Button onClick={deleteTasks}> 🗑️ </Button>
    </div>
  );
};

export default TasksItem;
