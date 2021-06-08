import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function FieldComponent() {
    return (
        <Form.Row className="align-items-center">
            <Col xs="3" className="my-2">
                <Form.Label
                    className="mr-xs-2"
                    htmlFor="inlineFieldSelect1"
                    srOnly
                ></Form.Label>
                <Form.Control
                    as="select"
                    className="mr-xs-2"
                    id="inlineFieldSelect1"
                    custom
                >
                    <option value="1">aff_sub</option>
                </Form.Control>
            </Col>
            <Col xs="3" className="my-2">
                <Form.Label
                    className="mr-xs-2"
                    htmlFor="inlineFieldSelect1"
                    srOnly
                ></Form.Label>
                <Form.Control
                    as="select"
                    className="mr-xs-2"
                    id="inlineFieldSelect1"
                    custom
                >
                    <option value="1">is</option>
                </Form.Control>
            </Col>
            <Col xs={6}>
                <Form.Control placeholder="City" />
            </Col>
        </Form.Row>
    );
}

export default FieldComponent;
