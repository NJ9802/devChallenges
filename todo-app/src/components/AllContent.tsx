"use client";

import React, { useContext } from "react";
import Form from "./ui/form";
import Task from "./ui/Task";
import TasksContext from "@/context/TasksContext";
import { ScrollArea } from "./ui/scroll-area";

interface AllContentProps {}

const AllContent: React.FC<AllContentProps> = ({}) => {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <Form />
      <ScrollArea className="h-[45vh] md:h-[52vh] mt-8">
        <div className="flex flex-col gap-7 text-lg text-black">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </ScrollArea>
    </>
  );
};

export default AllContent;
