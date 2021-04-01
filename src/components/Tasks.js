import Task from "./Task";
const Tasks = ({ tasks, onDelete, onBell }) => {
	return (
		<>
			{/* map trough the tasks array and render a task component for each task */}
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDelete={onDelete} onBell={onBell} />
			))}
		</>
	);
};

export default Tasks;
