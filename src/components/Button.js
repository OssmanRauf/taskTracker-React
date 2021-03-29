const Button = ({ cls, text, btnClick }) => {
	// const addtask = () => console.log("click");
	return (
		<button onClick={btnClick} className={cls}>
			{text}
		</button>
	);
};
export default Button;
