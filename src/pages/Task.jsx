import TaskForm from "../components/TaskForm";

const Task = () => {
  return (
    <div className="bg-[#EEF0F3] w-full flex flex-col p-8 gap-8 min-h-screen">
      <h1 className="text-3xl">New York High Rise / Task</h1>
      <TaskForm />
    </div>
  );
};

export default Task;
