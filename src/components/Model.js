import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTimes } from "react-icons/fa";
import Form from "./Form";
const Model = ({ modalShow, onHide, onAdd }) => {
	return (
		<Modal
			show={modalShow}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<Modal.Title id="contained-modal-title-vcenter">
					Add New Task
				</Modal.Title>
				<FaTimes onClick={() => onHide()} style={{ cursor: "pointer" }} />
			</Modal.Header>
			<Modal.Body>
				<Form onAdd={onAdd} />
			</Modal.Body>
		</Modal>
	);
};

export default Model;
