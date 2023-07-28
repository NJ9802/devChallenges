"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllContent from "./AllContent";
import TasksContext from "@/context/TasksContext";
import { type Task } from "@/types/task";
import TasksSkeleton from "./ui/TasksSkeleton";
import Footer from "./Footer";
import ActiveContent from "./ActiveContent";
import CompletedContent from "./CompletedContent";

let didInit = false;

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [renderChild, setRenderChild] = useState(false);

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") as string);
      setTasks(tasks || []);
      setRenderChild(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ setTasks, tasks }}>
      <div className="flex flex-col h-full">
        <main className="flex flex-col flex-1 p-8 md:px-0 mx-auto w-full">
          <h1 className="text-4xl text-center font-raleway font-bold">#todo</h1>
          <div className="flex justify-center mt-14">
            <Tabs defaultValue="all" className="w-full md:w-[608px]">
              <TabsList className="flex justify-between px-6 md:px-10 mb-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              {renderChild ? (
                <>
                  <TabsContent value="all">
                    <AllContent />
                  </TabsContent>
                  <TabsContent value="active">
                    <ActiveContent />
                  </TabsContent>
                  <TabsContent value="completed">
                    <CompletedContent />
                  </TabsContent>
                </>
              ) : (
                <TasksSkeleton />
              )}
            </Tabs>
          </div>
        </main>

        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </TasksContext.Provider>
  );
};

export default Home;
