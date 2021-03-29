import { useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import Model from "./Model";
function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "fazer alguma coisa",
			day: "Feb 5th at 2:30",
			reminder: false,
		},
		{
			id: 2,
			text: "fazer alguma outra cois",
			day: "Feb 5th at 1:30",
			reminder: true,
		},
		{
			id: 3,
			text: "fazer uma outra coisa",
			day: "Feb 6th at 2:45",
			reminder: false,
		},
	]);
	const [modalShow, setModalShow] = useState(false);

	const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
	const bellEvent = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
		console.log(tasks);
	};
	const popupModel = () => {
		console.log("click");
		setModalShow(true);
		console.log(modalShow);
	};
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};
	return (
		<div className="conteiner">
			<Header btnClick={popupModel} />
			{tasks.length > 0 ? (
				<Tasks onBell={bellEvent} onDelete={deleteTask} tasks={tasks} />
			) : (
				"No Tasks"
			)}
			<Model
				onAdd={addTask}
				modalShow={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
}

export default App;
