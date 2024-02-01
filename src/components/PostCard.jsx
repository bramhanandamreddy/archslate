import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/taskSlice";

const PostCard = () => {
  const task = useSelector((state) => state.tasks.taskData);
  const dispatch = useDispatch();

  const [textAreaValue, setTextAreaValue] = useState("");

  const [activity, setActivity] = useState({
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

  const handleTextArea = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleClick = () => {
    if (textAreaValue.trim() !== "") {
      const currentDate = new Date().toLocaleDateString();
      const newActivity = { task: textAreaValue, date: currentDate };

      setActivity((prevData) => ({
        ...prevData,
        activity: [...prevData.activity, newActivity],
      }));

      dispatch(
        addTask({
          ...activity,
          activity: [...activity.activity, newActivity],
        })
      );

      setTextAreaValue("");
    } else {
      console.log("error");
    }
  };

  const handleStatusChange = (value) => {
    setTextAreaValue(value);

    setActivity((prevData) => ({
      ...prevData,
      status: value,
    }));
  };

  return (
    <section className="flex bg-white rounded-lg p-6 gap-24">
      <div className="flex flex-col gap-6 w-2/3">
        <p className="font-bold text-xl">Post an Update:</p>
        <textarea
          name="post"
          cols="20"
          rows="8"
          onChange={handleTextArea}
          value={textAreaValue}
          className="border-2 rounded-md border-[#E5E5E5] p-2"
        ></textarea>
        <button
          onClick={handleClick}
          className="mx-auto bg-[#87898f] px-8 py-1 rounded-full text-white font-medium hover:bg-[#0F1420]"
        >
          Post Update
        </button>
      </div>

      <div className="flex flex-col gap-6">
        <p className="font-bold text-xl">Post an Update:</p>
        <div className="flex flex-col gap-2">
          <p
            onClick={() => handleStatusChange("Complete")}
            className={`border-2 text-center px-4 py-1 rounded-full text-[#0F1420] font-normal hover:bg-[#D7FEF0] hover:border-[#21CEAF]
                        ${
                          activity.status === "Complete"
                            ? "bg-[#D7FEF0] border-[#21CEAF]"
                            : "bg-[#E5E5E5] border-[#AFB6C0]"
                        }
                        `}
          >
            Complete
          </p>
          <p
            onClick={() => handleStatusChange("In Progress")}
            className={`border-2 text-center px-4 py-1 rounded-full text-[#0F1420] font-normal hover:bg-[#D7FEF0] hover:border-[#21CEAF]
                        ${
                          activity.status === "In Progress"
                            ? "bg-[#D7FEF0] border-[#21CEAF]"
                            : "bg-[#E5E5E5] border-[#AFB6C0]"
                        }
                        `}
          >
            In Progress
          </p>
          <p
            onClick={() => handleStatusChange("Stuck")}
            className={`border-2 text-center px-4 py-1 rounded-full text-[#0F1420] font-normal hover:bg-[#D1EFFF] hover:border-[#84D1FB]
                        ${
                          activity.status === "Stuck"
                            ? "bg-[#D1EFFF] border-[#84D1FB]"
                            : "bg-[#E5E5E5] border-[#AFB6C0]"
                        }
                        `}
          >
            Stuck
          </p>
          <p
            onClick={() => handleStatusChange("Not Started")}
            className={`border-2 text-center px-4 py-1 rounded-full text-[#0F1420] font-normal hover:bg-[#FFDAD2] hover:border-[#FF7B7B]
                        ${
                          activity.status === "Not Started"
                            ? "bg-[#FFDAD2] border-[#FF7B7B]"
                            : "bg-[#E5E5E5] border-[#AFB6C0]"
                        }
                        `}
          >
            Not Started
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
