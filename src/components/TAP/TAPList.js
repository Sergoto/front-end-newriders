import { Divider } from "@mui/material";
import React, { useState } from "react";
import TAPForm from "./TAPForm";
import TAPPage from "./TAPPage";

function TAPList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's your Trigger Action Plan (TAP)</h1>
      <p>
        1. Know your triggers. Knowing your triggers can help you deal with them
        because it gives you a heightened sense of control. Come up with a plan.
        Write them down here.
        <br />
        <br />
        2. An action plan to regulate yourself when you are triggered. Implement
        your calming techniques with what you've written down.
        <br />
        <br />
        3. Practice your calming tools so that you are prepared to calm yourself
        down when you are triggered.{" "}
          </p>
          <br/>
      <TAPForm onSubmit={addTodo} />
      <TAPPage
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TAPList;
