import Modal from "react-bootstrap/Modal";
import FormComponent from "./FormComponent";

const ModalComponent = ({ isShowing, handleClose }) => {
    return (
        <Modal
            show={isShowing}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="modal-form"
        >
            <Modal.Header closeButton>
                <Modal.Title id="modal-form">Add Revenue Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormComponent />
            </Modal.Body>
        </Modal>
    );
};

export default ModalComponent;
