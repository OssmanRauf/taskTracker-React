import Task from "./Task";
const Tasks = ({ tasks, onDelete, onBell }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDelete={onDelete} onBell={onBell} />
			))}
		</>
	);
};

export default Tasks;
