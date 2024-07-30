import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { data } from "../api/api";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Filter from "../components/Filter";
import NotFound from "./NotFoundPage";
export default function Products() {
  const [querry, setQuery] = useState("");
  const [filter, setFilter] = useState([]);
  const filteredData = data.filter((data) =>
    data.name.toLocaleLowerCase().includes(querry)
  );
  // function filteredProdcuts(category) {
  //   const newProd = data.filter((currentCat) => {
  //     return currentCat.category === category;
  //   });
  //   setFilter(newProd);
  // }
  return (
    <Container style={{ backgroundColor: "#FED8B1" }} className="py-4">
      <Filter />
      <Col xs="12" lg="6">
        <div className="d-flex flex-wrap">
          <Button
            variant="primary"
            style={{ width: "150px" }}
            className="mx-2 mb-2"
            // onClick={() => filteredProdcuts("HOT BEVERAGES")}
          >
            Hot beverages
          </Button>
          <Button
            variant="primary"
            style={{ width: "150px" }}
            className="mx-2 mb-2"
            // onClick={() => filteredProdcuts("ICED BEVERAGES")}
          >
            Iced beverages
          </Button>
        </div>
      </Col>

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
