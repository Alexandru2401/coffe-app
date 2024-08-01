import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Button } from "react-bootstrap";
import { faqs } from "../../api/faq";
import { Link } from "react-router-dom";
export default function FAQ() {
  return (
    <Container className="d-flex align-items-center flex-column my-4">
      <Row>
        <h2>FAQ</h2>
      </Row>
      <Row>
        <Accordion>
          {faqs.map((faq, index) => {
            return (
              <Row key={index} className="my-3">
                <h3>{faq.title}</h3>
                {faq.info.map((item, idx) => (
                  <Accordion.Item eventKey={`${index} - ${idx}`}>
                    <Accordion.Header>{item.subtitle}</Accordion.Header>
                    <Accordion.Body>{item.text}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Row>
            );
          })}
        </Accordion>
      </Row>
      <Row>
        <p className="mt-3 fw-bold fs-4">If your question is not answered here, you can contact us here:</p>
        <Link to="/contact">
          <Button>Contact page</Button>
        </Link>
      </Row>
    </Container>
  );
}
