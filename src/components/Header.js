import Button from "./Button";
const Header = ({ btnClick }) => {
	return (
		<div className="header">
			<h1> Task tracker </h1>
			<Button cls="btn btn-primary" text="Add" btnClick={btnClick} />
		</div>
	);
};
export default Header;
