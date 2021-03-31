const Header = ({ btnClick }) => {
	return (
		<div className="header">
			<h1> Task tracker </h1>
			<button onClick={btnClick} className="btn btn-primary">
				Add
			</button>
		</div>
	);
};
export default Header;
