"use client";
import TasksContext from "@/context/TasksContext";
import React, { useContext, useEffect } from "react";
import { ScrollArea } from "./ui/scroll-area";
import Task from "./ui/Task";
import { Button } from "./ui/button";

const CompletedContent = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const completedTasks = tasks.filter((task) => task.active === false);

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const deleteAllTasks = () => {
    const newTasks = tasks.filter((task) => task.active === true);
    setTasks(newTasks);
  };

  return (
    <div className="w-full">
      <ScrollArea className="h-56 w-full">
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between w-full"
          >
            <Task task={task} />
            <Button onClick={() => deleteTask(task.id)} variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V6C13 4.9 12.1 4 11 4H3C1.9 4 1 4.9 1 6V16ZM4 6H10C10.55 6 11 6.45 11 7V15C11 15.55 10.55 16 10 16H4C3.45 16 3 15.55 3 15V7C3 6.45 3.45 6 4 6ZM10.5 1L9.79 0.29C9.61 0.11 9.35 0 9.09 0H4.91C4.65 0 4.39 0.11 4.21 0.29L3.5 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3H13C13.55 3 14 2.55 14 2C14 1.45 13.55 1 13 1H10.5Z"
                  fill="#BDBDBD"
                />
              </svg>
            </Button>
          </div>
        ))}
      </ScrollArea>
      {completedTasks.length !== 0 && (
        <div className="flex justify-end w-full mt-8">
          <Button
            onClick={() => deleteAllTasks()}
            variant="destructive"
            size="sm"
          >
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
            >
              <g clipPath="url(#clip0_1_88)">
                <path
                  d="M3 10.7371C3 11.316 3.45 11.7897 4 11.7897H8C8.55 11.7897 9 11.316 9 10.7371V5.47392C9 4.89497 8.55 4.42129 8 4.42129H4C3.45 4.42129 3 4.89497 3 5.47392V10.7371ZM4.5 5.47392H7.5C7.775 5.47392 8 5.71076 8 6.00024V10.2108C8 10.5002 7.775 10.7371 7.5 10.7371H4.5C4.225 10.7371 4 10.5002 4 10.2108V6.00024C4 5.71076 4.225 5.47392 4.5 5.47392ZM7.75 2.84234L7.395 2.46866C7.305 2.37392 7.175 2.31602 7.045 2.31602H4.955C4.825 2.31602 4.695 2.37392 4.605 2.46866L4.25 2.84234H3C2.725 2.84234 2.5 3.07918 2.5 3.36866C2.5 3.65813 2.725 3.89497 3 3.89497H9C9.275 3.89497 9.5 3.65813 9.5 3.36866C9.5 3.07918 9.275 2.84234 9 2.84234H7.75Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_88">
                  <rect
                    width="12"
                    height="12.6316"
                    fill="white"
                    transform="translate(0 0.737076)"
                  />
                </clipPath>
              </defs>
            </svg>
            delete all
          </Button>
        </div>
      )}
    </div>
  );
};

export default CompletedContent;
