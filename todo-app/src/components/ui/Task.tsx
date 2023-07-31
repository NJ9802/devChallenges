"use client";

import React, { useContext } from "react";
import { Checkbox } from "./checkbox";
import { Task } from "@/types/task";
import TasksContext from "@/context/TasksContext";

interface TaskProps {
  task: Task;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleChange = () => {
    const tasksCopy = tasks.map((task, i) =>
      i === index ? { ...task, active: !task.active } : task
    );

    setTasks(tasksCopy);
  };

  return (
    <div className="flex w-fit items-center gap-2">
      <Checkbox
        id={task?.id}
        checked={!task.active}
        onCheckedChange={handleChange}
      />
      <label
        htmlFor={task?.id}
        className="peer-data-[state=checked]:text-foreground peer-data-[state=checked]:line-through cursor-pointer"
      >
        {task?.title}
      </label>
    </div>
  );
};

export default Task;
