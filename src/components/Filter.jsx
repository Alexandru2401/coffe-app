import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form, FormControl } from "react-bootstrap";
const options = [
  {
    name: "Enable backdrop (default)",
    scroll: true,
    backdrop: true,
  },
  {
    name: "Disable backdrop",
    scroll: true,
    backdrop: true,
  },
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: true,
  },
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

export default function Filter({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {name} Add
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        scroll={true}
        backdrop={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add fillters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group controlId="filterCheckbox">
              <Form.Label>Filter by category</Form.Label>
              <Form.Check type="checkbox" label="Hot" />
              <Form.Check type="checkbox" label="Ice" />
              <Form.Check type="checkbox" label="Other" />
            </Form.Group>
            <Form.Group controlId="filterCheckbox">
              <Form.Label>Filter by preparation time</Form.Label>
              <Form.Check type="checkbox" label="3-5 min" />
              <Form.Check type="checkbox" label="5-10 min" />
              <Form.Check type="checkbox" label="+10 min" />
            </Form.Group>
          </Form>
          <Button>Remove filters</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
