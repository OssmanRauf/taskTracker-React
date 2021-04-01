import { FaTimes, FaBellSlash, FaBell } from "react-icons/fa";
const Task = ({ task, onDelete, onBell }) => {
	return (
		<div className="task">
			<h3>
				{task.text}
				<div className="icons">
					{/* check if reminder is active or not and add the proper bell icon */}
					{task.reminder === true ? (
						<FaBellSlash
							className="bell-icon"
							onClick={() => onBell(task.id)}
						/>
					) : (
						<FaBell className="bell-icon" onClick={() => onBell(task.id)} />
					)}
					<FaTimes
						style={{ cursor: "pointer", color: "red" }}
						className="delete-icon icon"
						onClick={() => onDelete(task.id)}
					/>
				</div>
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
