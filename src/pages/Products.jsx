import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { data } from "../api/api";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
export default function Products() {
  const [querry, setQuery] = useState("");
  return (
    <Container>
      <Row>
        <Col className="my-4">
          <Form.Control
            type="text"
            placeholder="Search for a product..."
            className=" mr-sm-2"
            onChange={(e) => {
              setQuery(e.target.value.toLowerCase());
            }}
          />
        </Col>
      </Row>
      <Row>
        {data
          .filter((data) => data.name.toLocaleLowerCase().includes(querry))
          .map((data) => (
            <Col className="my-2">
              <ProductCard
                key={data._id}
                name={data.name}
                image={data.image}
                description={data.description}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
