import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addTask } from "../redux/taskSlice";
import "../index.css";

const TaskForm = () => {
  const task = useSelector((state) => state.tasks.taskData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: task.title || "",
    assign: task.assign || [],
    date: task.date || "",
    priority: task.priority || "",
    description: task.description || "",
    project: task.project || "",
    activity: task.activity,
    status: task.status,
    view: task.view || [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAssignKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const assignValue = e.target.value.trim();
      if (assignValue) {
        setFormData((prevData) => ({
          ...prevData,
          assign: [...prevData.assign, assignValue],
        }));
        e.target.value = "";
      }
    }
  };

  const handleViewKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const viewValue = e.target.value.trim();
      if (viewValue) {
        setFormData((prevData) => ({
          ...prevData,
          view: [...prevData.view, viewValue],
        }));
        e.target.value = "";
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(formData));
    navigate("/");
  };

  return (
    <div className="flex flex-col bg-white rounded-lg p-6 gap-8 text-[#0F1420]">
      <p className="font-bold text-2xl">{formData.title}</p>
      <form className="w-full flex flex-col gap-6" onSubmit={handleFormSubmit}>
        <div className="flex w-full gap-12">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="title" className="font-medium text-xl">
              Title
            </label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              className="border-2 py-1 px-2 rounded-lg font-normal text-lg"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Assign" className="font-medium text-xl">
              Assign To
            </label>
            <input
              type="text"
              name="assign"
              onKeyDown={handleAssignKeyDown}
              className="border-2 py-1 px-2 rounded-lg font-normal text-lg"
            />
            <div className="flex flex-wrap gap-1 font-medium max-w-[400px]">
              {formData.assign.map((assign, index) => (
                <p
                  className="flex gap-2 py-1 px-5 border-2 rounded-full border-[#0F1420]"
                  key={index}
                >
                  {assign}
                  <span className="text-red-600 font-bold">X</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full gap-12">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="title" className="font-medium text-xl">
              Due Date
            </label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border-2 py-1 px-2 rounded-lg font-normal text-lg"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Assign" className="font-medium text-xl">
              Priority
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className="border-2 py-1 px-2 rounded-lg font-normal text-lg"
            >
              <option>Hard</option>
              <option>Easy</option>
              <option>Medium</option>
            </select>
          </div>
        </div>

        <div className="flex w-full gap-12">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="title" className="font-medium text-xl">
              Is this goal attached to a project?
            </label>
            <select
              value={formData.project}
              name="project"
              onChange={handleInputChange}
              className="border-2 py-1 px-2 rounded-lg font-normal text-lg"
            >
              <option className="hover:bg-black hover:text-white">
                New York High Rise
              </option>
              <option>22nd St</option>
              <option>38th St</option>
              <option>Not attached to a project</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Assign" className="font-medium text-xl">
              Who else can view this task?
            </label>
            <input
              type="text"
              name="view"
              onKeyDown={handleViewKeyDown}
              className="border-2 py-1 px-2 rounded-lg font-normal text-lg"
            />
            <div className="flex flex-wrap gap-1 max-w-[400px] font-medium">
              {formData.view.map((view, index) => (
                <p
                  className="flex gap-2 py-1 px-5 border-2 rounded-full border-[#0F1420]"
                  key={index}
                >
                  {view}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Description" className="font-medium text-xl">
            Description
          </label>
          <textarea
            id=""
            cols="30"
            rows="6"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border-2 py-1 px-2 rounded-lg font-normal text-lg"
          ></textarea>
        </div>

        <div className="flex gap-2 justify-end">
          <Link
            to="/"
            className="border-black border-2 hover:text-white px-6 py-1 rounded-full font-medium text-lg hover:bg-[#0F1420]"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border-2 bg-[#87898f] px-10 py-1 rounded-full text-white hover:text-black font-medium text-lg hover:bg-[#D7FEF0] hover:border-[#21CEAF] focus:bg-[#D7FEF0] focus:border-[#21CEAF]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
