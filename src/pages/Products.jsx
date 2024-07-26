import { Container, Row, Col } from "react-bootstrap";
import { data } from "../api/api";
import ProductCard from "../components/ProductCard";
export default function Products() {
  return (
    <Container>
      <Row>
        {data.map((data) => {
          return (
            <Col>
              <ProductCard
                key={data._id}
                name={data.name}
                image={data.image}
                description={data.description}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
