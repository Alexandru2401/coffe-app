import { Container, Row, Col } from "react-bootstrap";
import bgImg from "../../assests/bgImg.jpg";
import { data } from "../../api/api";
export default function Story() {
  // This will be story/ about
  return (
    <Container className="d-flex flex-wrap py-4">
      <Row>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <h2>Our story</h2>
          <p>
            Our story began 10 years ago, when we decided to add a little extra
            flavor to every cup of coffee.{" "}
          </p>
          <p>
            Since then we have been working hard to have the best products on
            the market. We don't say it, our customers say it.
          </p>
          <p>
            Each product is unique, contains no allergens and suits any taste,
            any day, any time. Whether you want to enjoy your coffee, which
            energizes you throughout the day, or you want to cool down on a hot
            summer day with a frappe, Coffee is at your service.
          </p>
        </Col>
        <Col md={6}>
          <Container>
            <Row>
              <Col xs={6} className="p-1">
                <img src={data[12].image} alt="Image 1" className="img-fluid" />
              </Col>
              <Col xs={6} className="p-1">
                <img src={data[10].image} alt="Image 2" className="img-fluid" />
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="p-1">
                <img src={data[1].image} alt="Image 3" className="img-fluid" />
              </Col>
              <Col xs={6} className="p-1">
                <img src={data[22].image} alt="Image 4" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
