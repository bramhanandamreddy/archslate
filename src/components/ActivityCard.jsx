import { useSelector } from "react-redux";

const ActivityCard = () => {
  const data = useSelector((state) => state.tasks.taskData);

  return (
    <section className="flex flex-col bg-white rounded-lg p-6 gap-6 text-[#0F1420] font-normal text-lg">
      <p className="font-bold text-xl">Activity:</p>
      <table>
        <tbody>
          {data.activity.map((data, index) => (
            <tr key={index}>
              <td className="font-bold">Suzette Goldstein</td>
              <td>{data.task}</td>
              <td>{data.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ActivityCard;
