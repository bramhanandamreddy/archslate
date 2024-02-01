import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectCard = () => {
  const task = useSelector((state) => state.tasks.taskData);
  const [isViewVisible, setIsViewVisible] = useState(false);

  const toggleViewVisibility = () => {
    setIsViewVisible(!isViewVisible);
  };

  return (
    <section className="flex flex-col bg-white rounded-lg p-6 gap-8 z-0">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">{task.title}</h2>
        <div className="flex gap-4">
          <Link
            to="/task"
            className="border-black border-2 hover:text-white px-6 py-1 rounded-full font-medium text-lg hover:bg-[#0F1420]"
          >
            Edit Task
          </Link>
          <button className="border-black border-2 hover:text-white px-6 py-1 rounded-full font-medium text-lg hover:bg-[#0F1420]">
            End Task
          </button>
        </div>
      </div>
      <div className="flex gap-16">
        {
          <ul className="flex flex-col gap-3 min-w-[300px]">
            {/* ... (other list items) */}
            <li className="flex gap-1" onClick={toggleViewVisibility}>
              <button className="cursor-pointer">
                <img src="" alt="eye icon" />
                <p className="font-bold">{task.view.length}</p>
              </button>
            </li>
          </ul>
        }

        <p className="flex flex-col gap-4 max-w-[634px]">
          <span className="font-bold">Description:</span>
          {task.description}
        </p>
      </div>

      {isViewVisible && (
        <div className="flex flex-col bg-white gap-2 border-2 shadow-lg py-4 px-6 rounded-lg absolute bottom-[25%] left-[25%] z-20">
          {/* ... (other view details) */}
          {task.view.map((view, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img src="" alt="profile" className="w-9 h-9 rounded-full" />
              <button className="font-bold text-lg text-[#494BAA] underline cursor-pointer">
                {view}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
