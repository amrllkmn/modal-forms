import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FieldComponent({ id, onAddField, onRemoveField, rule }) {
    return (
        <Form.Row className="align-items-center">
            <Col xs="3" className="my-2">
                <Form.Label
                    className="mr-xs-2"
                    htmlFor={`inlineFieldSelect1-${id}`}
                    srOnly
                ></Form.Label>
                <Form.Control
                    as="select"
                    className="mr-xs-2"
                    id={`inlineFieldSelect1-${id}`}
                    custom
                >
                    <option value="1">aff_sub</option>
                </Form.Control>
            </Col>
            <Col xs="3" className="my-2">
                <Form.Label
                    className="mr-xs-2"
                    htmlFor={`inlineFieldSelect2-${id}`}
                    srOnly
                ></Form.Label>
                <Form.Control
                    as="select"
                    className="mr-xs-2"
                    id={`inlineFieldSelect2-${id}`}
                    custom
                >
                    <option value="1">is</option>
                </Form.Control>
            </Col>
            <Col xs={6}>
                <Form.Control placeholder="City" />
            </Col>
            <Col xs="auto" className="my-2">
                <Button
                    id={`add-btn-${id}`}
                    variant="primary"
                    type="button"
                    onClick={() => onAddField()}
                >
                    +
                </Button>
            </Col>
            <Col xs="auto" className="my-2">
                <Button
                    id={`remove-btn-${id}`}
                    variant="secondary"
                    type="button"
                    onClick={() => onRemoveField(id)}
                >
                    -
                </Button>
            </Col>
        </Form.Row>
    );
}

export default FieldComponent;
