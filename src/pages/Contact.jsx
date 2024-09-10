import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
function Contact() {
  const [showMessage, setMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function formValidation() {
    if (name === "") {
      setErrorMessage(true);
    }
  }

  return (
    <Container className="my-3">
      <Row className="justify-content-center">
        <Col xs="auto">
          <h2 className="my-3 text-center">Contact us</h2>
        </Col>
      </Row>
      <Row className="my-4 mx-1">
        <Col xs={12} lg={6} className="col-component">
          <h3>Visits Us</h3>
          <p>You can Visits us at one of our shop </p>
        </Col>
        <Col xs={12} lg={6} className="col-component">
          <h3>Phone</h3>
          <p>
            You can also call us from monday to friday between 10:00 - 18:00
          </p>
          <p> +12 123 456 789</p>
        </Col>
      </Row>
      {showMessage ? (
        <Row>
          <p className="my-5  fw-bold text-center">
            {" "}
            Thank you for contacting us! We will get back to you as soon as
            possible!
          </p>
        </Row>
      ) : (
        <>
          <Row>
            <p className="mt-5 fw-bold text-center">
              Or you can send an email:
            </p>
          </Row>
          <Row className=" justify-content-center mx-2">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="w-100 my-3 p-4 col-component"
              style={{ maxWidth: "600px" }}
            >
              <Form.Group
                as={Col}
                className="mx-auto"
                controlId="validationCostomFname"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />{" "}
                <Form.Control.Feedback type="invalid">
                  First name is empty
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                className="mx-auto"
                controlId="validationCustomEmail"
              >
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Ex: name@email.com"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group
                as={Col}
                className="mx-auto"
                controlId="validationCustomTextarea"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message here..."
                  value={textMessage}
                  onChange={(e) => setTextMessage(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" className="my-3">
                Submit
              </Button>
            </Form>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Contact;
