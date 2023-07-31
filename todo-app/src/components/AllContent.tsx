"use client";

import React, { useContext } from "react";
import Form from "./ui/form";
import TasksContext from "@/context/TasksContext";
import { ScrollArea } from "./ui/scroll-area";
import TasksLists from "./ui/TasksLists";

interface AllContentProps {}

const AllContent: React.FC<AllContentProps> = ({}) => {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <Form />
      <ScrollArea className="h-[45vh] md:h-[52vh] mt-8">
        <TasksLists tasks={tasks} />
      </ScrollArea>
    </>
  );
};

export default AllContent;
