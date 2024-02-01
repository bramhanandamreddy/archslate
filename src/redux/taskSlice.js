import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskData: {
    title: "Create Architectural Concepts",
    assign: ["Brian Jenek"],
    date: "11/03/2023",
    priority: "Medium",
    project: "New York High Rise",
    view: ["Suzette Goldstein"],
    activity: [{ task: "Created this task", date: "08/24/2023" }],
    status: "In Progress",
    description:
      "Conduct extensive research to gather inspiration from various sources. This research can include studying historical precedents, exploring architectural trends, and seeking innovative design solutions. Based on the information gathered from the client, site analysis, and research, senior architects begin the process of developing a design concept. This is the foundational idea that will guide the entire project. The concept should align with the client's objectives, site conditions, and the firm's design philosophy.",
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskData = action.payload;
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
