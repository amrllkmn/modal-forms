import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FieldComponent from "./FieldComponent";

function FormComponent() {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="revenueGroupTitle">
                    <Form.Label>Revenue Group Title</Form.Label>
                    <Form.Control type="input" placeholder="" />
                </Form.Group>
            </Form.Row>
            <Form.Row className="align-items-center">
                If
                <Col xs="auto" className="my-2">
                    <Form.Label
                        className="mr-sm-2"
                        htmlFor="inlineConditionSelect"
                        srOnly
                    >
                        Preference
                    </Form.Label>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineConditionSelect"
                        custom
                    >
                        <option value="1">ALL</option>
                        <option value="2">ANY</option>
                        <option value="3">NONE</option>
                    </Form.Control>
                </Col>
                of the below conditions are met
            </Form.Row>
            <FieldComponent />
            <Form.Row className="align-items-center">
                then revenue is
                <Col xs={3} className="my-2">
                    <InputGroup>
                        <Form.Control
                            placeholder="15"
                            aria-label="Revenue percentage"
                            aria-describedby="percentage"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Form.Row>
            <Form.Row className="align-items-center">
                <Col xs="auto" className="my-2">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
                <Col xs="auto" className="my-2">
                    <Button variant="secondary" type="reset">
                        Cancel
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default FormComponent;
