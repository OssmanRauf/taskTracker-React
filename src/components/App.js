import { useState, useEffect } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import Model from "./Model";

function App() {
	const [tasks, setTasks] = useState(
		localStorage.getItem("tasks")
			? JSON.parse(localStorage.getItem("tasks"))
			: []
	);
	const [modalShow, setModalShow] = useState(false);
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);
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
		setModalShow(false);
	};
	return (
		<div className="conteiner">
			<Header btnClick={popupModel} />{" "}
			{tasks.length > 0 ? (
				<Tasks onBell={bellEvent} onDelete={deleteTask} tasks={tasks} />
			) : (
				"No Tasks"
			)}{" "}
			<Model
				onAdd={addTask}
				modalShow={modalShow}
				onHide={() => setModalShow(false)}
			/>{" "}
		</div>
	);
}

export default App;
