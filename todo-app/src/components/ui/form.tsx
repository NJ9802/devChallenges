"use client";

import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "./input";
import { Button } from "./button";
import TasksContext from "@/context/TasksContext";

interface formProps {}

const Form: React.FC<formProps> = ({}) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [task, setTask] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { title: task, active: true, id: uuidv4() }]);
      setTask("");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex items-center gap-6">
      <Input
        onChange={(e) => handleChange(e)}
        value={task}
        id="task"
        type="text"
        placeholder="add details"
      />
      <Button disabled={!task} type="submit">
        Add
      </Button>
    </form>
  );
};

export default Form;
