import { useState, useEffect } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import Model from "./Model";

function App() {
	//tasks state
	const [tasks, setTasks] = useState(
		localStorage.getItem("tasks")
			? JSON.parse(localStorage.getItem("tasks"))
			: []
	);
	// modal state
	const [modalShow, setModalShow] = useState(false);
	//storing data in local storage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);
	const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
	// change bell icon and reminder value when user click in bell
	const bellEvent = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};
	const popupModel = () => {
		setModalShow(true);
	};
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
		setModalShow(false);
	};
	return (
		<div className="conteiner">
			<Header btnClick={popupModel} />
			{/* check if there is tasks or not, if not render a "no task text" */}
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
