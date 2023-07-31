import { type Task as ITask } from "@/types/task";
import React from "react";
import Task from "./Task";

interface TasksListsProps {
  tasks: ITask[];
}

const TasksLists: React.FC<TasksListsProps> = ({ tasks }) => {
  return (
    <div className="flex flex-col gap-7 text-lg text-black">
      {tasks.map((task, index) => (
        <Task key={task.id} index={index} task={task} />
      ))}
    </div>
  );
};

export default TasksLists;
