import { Form } from "react-bootstrap";

export default function PayForm() {
  return (
    <Form style={{ width: "300px" }}>
      <Form.Group className="mb-3" controlId=" exampleForm.ControlInput1">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId=" exampleForm.ControlInput1">
        <Form.Label>Card number</Form.Label>
        <Form.Control type="number" placeholder="card number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId=" exampleForm.ControlInput1">
        <Form.Label>CVV</Form.Label>
        <Form.Control type="number" placeholder="000" />
      </Form.Group>
      <Form.Group className="mb-3" controlId=" exampleForm.ControlInput1">
        <Form.Label>Expire date</Form.Label>
        <Form.Control type="date" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="000 123 314 414" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="My Street, 19, City" />
      </Form.Group>
      <Form.Check
        aria-label="option 1"
        label="Agree with terms and conditions"
      />
    </Form>
  );
}
