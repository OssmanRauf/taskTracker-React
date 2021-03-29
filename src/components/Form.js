import { useState } from "react";

const Form = ({ onAdd }) => {
	const [text, setText] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState(false);
	const [okay, setOkay] = useState(true);
	const onSubmit = (e) => {
		e.preventDefault();
		if (!text) {
			setOkay(false);
			return;
		}
		onAdd({ text, day, reminder });
		setOkay(true);
		setText("");
		setDay("");
		setReminder(false);
	};

	return (
		<form onSubmit={onSubmit}>
			{!okay ? (
				<div class="alert alert-danger" role="alert">
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
					value={text}
					onChange={(e) => setText(e.target.value)}></input>
			</div>
			<div className="form-group">
				<label>Day and time</label>
				<input
					type="text"
					className="form-control"
					placeholder="Add Day and Time"
					value={day}
					onChange={(e) => setDay(e.target.value)}></input>
			</div>
			<div className="form-check">
				<input
					type="checkbox"
					className="form-check-input"
					checked={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}></input>
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
