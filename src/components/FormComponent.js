import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FieldComponent from "./FieldComponent";
import useRule from "../helpers/useRule";
import { useState } from "react";

function FormComponent() {
    const {
        form,
        handleAddFields,
        handleRemoveFields,
        handlePercentageChange,
        handleAddRule,
        handleRemoveRule,
    } = useRule();
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
            {form.rules.map((rule, index) => {
                return (
                    <FieldComponent
                        key={`rule-${index + 1}`}
                        id={index}
                        onAddField={handleAddFields}
                        onRemoveField={handleRemoveFields}
                        len={form.rules.length}
                        rules={rule}
                        onAddRule={handleAddRule}
                        onRemoveRule={handleRemoveRule}
                    />
                );
            })}
            <Form.Row className="align-items-center">
                then revenue is
                <Col xs={3} className="my-2">
                    <InputGroup hasValidation>
                        <Form.Control
                            placeholder="15"
                            aria-label="Revenue percentage"
                            aria-describedby="percentage"
                            type="text"
                            value={form.revenuePercentage}
                            onChange={handlePercentageChange}
                            isInvalid={
                                form.revenuePercentage !== "" &&
                                !/^[0-9\b]+$/.test(form.revenuePercentage)
                            }
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="percentage">%</InputGroup.Text>
                        </InputGroup.Append>
                        <Form.Control.Feedback type="invalid">
                            Please insert a number.
                        </Form.Control.Feedback>
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
