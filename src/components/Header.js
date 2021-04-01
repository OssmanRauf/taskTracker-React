const Header = ({ btnClick }) => {
	return (
		<div className="header">
			<h1> Task tracker </h1>
			{/* when clicked show modal */}
			<button onClick={btnClick} className="btn btn-primary">
				Add
			</button>
		</div>
	);
};
export default Header;
