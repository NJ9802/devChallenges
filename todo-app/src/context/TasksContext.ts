import { createContext } from "react";
import { type Task } from "@/types/task";

const TasksContext = createContext<{
  setTasks: React.Dispatch<
    React.SetStateAction<Task[]>
  >;
  tasks: Task[];
}>({ tasks: [], setTasks: () => {} });

export default TasksContext;
