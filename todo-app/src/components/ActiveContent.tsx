"use client";

import React, { useContext } from "react";
import Form from "./ui/form";
import { ScrollArea } from "./ui/scroll-area";
import TasksContext from "@/context/TasksContext";
import TasksLists from "./ui/TasksLists";

const ActiveContent = () => {
  const { tasks } = useContext(TasksContext);

  const activeTasks = tasks.filter((task) => task.active === true);

  return (
    <>
      <Form />
      <ScrollArea className="h-[45vh] md:h-[52vh] mt-8">
        <TasksLists tasks={activeTasks} />
      </ScrollArea>
    </>
  );
};

export default ActiveContent;
