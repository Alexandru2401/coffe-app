import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function GeneralInfo() {
  // This part will contain some info about products
  return (
    <Container className="my-5 d-flex flex-column align-items-center">
      <Row>
        <Col>
          <h2>General Info</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe
            nemo ad perferendis ipsam et cum est, soluta deleniti tempore!
            Laboriosam, dolorem debitis dolore iste nobis unde quidem error
            minus?
          </p>
        </Col>
      </Row>

      <Row className="w-100 d-flex justify-content-center">
        <Col xs={12} md={6} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>No chemical</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Organic Coffee
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                maiores a sapiente deleniti nihil, dolore nemo molestiae nostrum
                illo nam similique.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Link to="/products">
                  <Button>See products</Button>
                </Link>
                <Link to="/ingredients">
                  <Button>See ingredients</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>No Preservatives</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Fresh products
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                maiores a sapiente deleniti nihil, dolore nemo molestiae nostrum
                illo nam similique.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Link to="/products">
                  <Button>See products</Button>
                </Link>
                <Link to="/ingredients">
                  <Button>See ingredients</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>No Additives</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                No allergens
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                maiores a sapiente deleniti nihil, dolore nemo molestiae nostrum
                illo nam similique.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Link to="/products">
                  <Button>See products</Button>
                </Link>
                <Link to="/ingredients">
                  <Button>See ingredients</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Just Coffee</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Real Coffee
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                maiores a sapiente deleniti nihil, dolore nemo molestiae nostrum
                illo nam similique.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Link to="/products">
                  <Button>See products</Button>
                </Link>
                <Link to="/ingredients">
                  <Button>See ingredients</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
