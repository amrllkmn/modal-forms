import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FieldComponent({
    id,
    onAddField,
    onRemoveField,
    onAddRule,
    onRemoveRule,
    rules,
    len,
}) {
    return (
        <Form.Group>
            <Form.Label>{`Rule ${id + 1}`}</Form.Label>
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
                <Col xs={5}>
                    {rules.field3.map((input, index) => (
                        <Form.Row key={`input-${index + 1}`}>
                            <Col>
                                <Form.Control
                                    type="input"
                                    placeholder="insert parameter"
                                />
                            </Col>
                            {rules.field3.length - 1 === index && (
                                <Col xs="auto">
                                    <Button
                                        size="sm"
                                        variant="link"
                                        id={`rule-${id + 1}-add_btn-${
                                            index + 1
                                        }`}
                                        onClick={() => onAddRule(id)}
                                    >
                                        Add rule
                                    </Button>
                                </Col>
                            )}
                            {rules.field3.length !== 1 && (
                                <Col xs="auto">
                                    <Button
                                        size="sm"
                                        variant="link"
                                        id={`rule-${id + 1}-remove_btn-${
                                            index + 1
                                        }`}
                                        className="remove-rule"
                                        onClick={() => onRemoveRule(id, index)}
                                    >
                                        Remove rule
                                    </Button>
                                </Col>
                            )}
                        </Form.Row>
                    ))}
                </Col>
            </Form.Row>
            <Form.Row className="align-items-center">
                {len - 1 === id && (
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
                )}
                {len !== 1 && (
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
                )}
            </Form.Row>
        </Form.Group>
    );
}

export default FieldComponent;
