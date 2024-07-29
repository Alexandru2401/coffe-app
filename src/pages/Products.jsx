import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { data } from "../api/api";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import NotFound from "./NotFoundPage";
export default function Products() {
  const [querry, setQuery] = useState("");
  const filteredData = data.filter((data) =>
    data.name.toLocaleLowerCase().includes(querry)
  );
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
        {filteredData.length === 0 ? (
          <Col>
            <NotFound />
          </Col>
        ) : (
          filteredData.map((data) => (
            <Col className="my-2" key={data._id}>
              <ProductCard
                id={data._id}
                name={data.name}
                image={data.image}
                description={data.description}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
