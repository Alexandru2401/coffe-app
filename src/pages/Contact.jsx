import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup, Col, Container, Row } from "react-bootstrap";
export default function Contact() {
  return (
    <Container className="d-flex align-items-center flex-column my-3">
      <Row>
        <h2>Contact us</h2>
      </Row>
      <Row>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          consequatur maxime soluta laboriosam dolores? Vero obcaecati,
          reiciendis, culpa consequuntur, perspiciatis quaerat suscipit laborum
          quos tenetur soluta voluptatibus dolorum quae tempore.
        </p>
      </Row>
      <Row>
        <Form className="d-flex flex-column justift-content-center align-items-center flex-wrap m-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCostomFname"
            style={{ maxWidth: "500px", minWidth: "300px" }}
          >
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback type="invalid">
              First name is empty
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomLname"
            style={{ maxWidth: "500px", minWidth: "300px" }}
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback type="invalid">
              Last name is empty
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomEmail"
            style={{ maxWidth: "500px", minWidth: "300px" }}
          >
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Ex: name@email.com"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomPhone"
            style={{ maxWidth: "500px", minWidth: "300px" }}
          >
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ex: 012 345 679"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomTextarea"
            style={{ maxWidth: "500px", minWidth: "300px" }}
          >
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your message here..."
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" className="mb-3">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
