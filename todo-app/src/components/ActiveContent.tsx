import React, { useContext } from "react";
import Form from "./ui/form";
import { ScrollArea } from "./ui/scroll-area";
import TasksContext from "@/context/TasksContext";
import Task from "./ui/Task";

const ActiveContent = () => {
  const { tasks } = useContext(TasksContext);

  const activeTasks = tasks.filter((task) => task.active === true);

  return (
    <>
      <Form />
      <ScrollArea className="h-[45vh] md:h-[52vh] mt-8">
        <div className="flex flex-col gap-7 text-lg text-black">
          {activeTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </ScrollArea>
    </>
  );
};

export default ActiveContent;
