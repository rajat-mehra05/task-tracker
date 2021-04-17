import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { db } from "./firebase_config";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Grid, Button } from "@material-ui/core";
import svg from "./tracker.svg";
import TasksItem from "./TasksItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),

    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const TaskContainer = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getToDos();
  }, [todoInput]);

  const getToDos = () => {
    db.collection("tasks").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          task: doc.data().task,
          inProgress: doc.data().inProgress,
        }))
      );
    });
  };

  const addToDo = (e) => {
    e.preventDefault();

    //firebase
    db.collection("tasks").add({
      inProgress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      task: todoInput,
    });

    setTodoInput("");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <img src={svg} alt="svgPIC" height="470px" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h1 style={{ background: "#a3d2ca" }}>Personal Task Tracker</h1>
          </Paper>
          <form>
            <TextField
              id="standard-basic"
              label="Today's Tasks 🏃"
              value={todoInput}
              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "60%",
                marginLeft: "2rem",
              }}
            />
            <Button
              variant="contained"
              type="submit"
              onClick={addToDo}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                marginLeft: "2rem",
                color: "#eee",
                background: "#2f5d62",
              }}
            >
              {" "}
              Add Task
            </Button>
          </form>
          {todos.map((todo) => (
            <TasksItem
              todo={todo.task}
              inProgress={todo.inProgress}
              id={todo.id}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskContainer;
