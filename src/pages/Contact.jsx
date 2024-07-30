import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup, Col, Container, Row } from "react-bootstrap";
export default function Contact() {
  return (
    <Container className="d-flex align-items-center flex-column justify-content-center my-3">
      <Row>
        <h2 className="my-3">Contact us</h2>
      </Row>
      <Row>
        <Col className="col-component mx-2" >
          <h3>Visits Us</h3>
          <p>You can Visits us at one of our shop </p>
        </Col>
        <Col className="col-component">
          <h3>Phone</h3>
          <p>
            You can also call us from monday to friday between 10:00 - 18:00
          </p>
        </Col>
      </Row>
      <Row>
        <p className="mt-5 fw-bold">Or you can send an email:</p>
      </Row>
      <Row className="col-component mb-3">
        <Form className="d-flex flex-column justift-content-center align-items-center flex-wrap m-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCostomFname"
            style={{ maxWidth: "500px", minWidth: "300px" }}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback type="invalid">
              First name is empty
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
          <Button type="submit" className="my-3">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
