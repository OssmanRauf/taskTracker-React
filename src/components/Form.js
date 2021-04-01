import { useState } from "react";

const Form = ({ onAdd }) => {
	const [task, setTask] = useState({});
	const [okay, setOkay] = useState(true);
	const onSubmit = (e) => {
		e.preventDefault();
		if (!task.text) {
			setOkay(false);
			return;
		}
		onAdd(task);
		//set the task back to empty object
		setTask({});
	};

	return (
		<form onSubmit={onSubmit}>
			{/* check if input is not empty */}
			{!okay ? (
				<div className="alert alert-danger" role="alert">
					Please add a task!
				</div>
			) : (
				""
			)}
			<div className="form-group">
				<label>Task</label>
				<input
					type="text"
					className="form-control"
					placeholder="Add Task"
					value={task.text}
					onChange={(e) => {
						const text = e.target.value;
						setTask({ ...task, text });
					}}></input>
			</div>

			<div className="form-group">
				<label htmlFor="example-datetime-local-input">Date and time</label>
				<input
					className="form-control"
					type="datetime-local"
					onChange={(e) => {
						const day = new Date(e.target.value).toString().slice(0, 24);
						setTask({ ...task, day });
					}}></input>
			</div>
			<div className="form-check">
				<input
					type="checkbox"
					className="form-check-input"
					checked={task.reminder}
					onChange={(e) => {
						const reminder = e.currentTarget.checked;
						setTask({ ...task, reminder });
					}}></input>
				<label className="form-check-label">Set Reminder</label>
			</div>
			<input
				style={{ marginTop: "10px" }}
				type="submit"
				className="btn btn-primary btn-block"
				value="Add New Task"></input>
		</form>
	);
};
export default Form;
