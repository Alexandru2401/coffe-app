import { Form } from "react-bootstrap";

export default function PayForm() {
  return (
    <Form style={{ width: "300px" }}>
      <Form.Group className="mb-3" controlId=" exampleForm.ControlInput1">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Check
        aria-label="option 1"
        label="Agree with terms and conditions"
      />
    </Form>
  );
}
