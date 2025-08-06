import { Card, Col, Container, Row } from "react-bootstrap";
import { FaBaseballBall } from "react-icons/fa";

import "./cardFooter.css";

function CardFooter() {
  return (
    <section className="card">
      <Container>
        <Row>
          <Col lg={4}>
            <Card className="cardElement">
              <Card.Header className="cardHeadings">
                <FaBaseballBall />
              </Card.Header>
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle"> Immediate Deployment </Card.Title>
                <Card.Text className="cardTextes">
                  Et vero eos et accusamus et iusto odio dignissimos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="cardElement">
              <Card.Header className="cardHeadings">
                <FaBaseballBall />
              </Card.Header>
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle"> Immediate Deployment </Card.Title>
                <Card.Text className="cardTextes">
                  Et vero eos et accusamus et iusto odio dignissimos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="cardElement">
              <Card.Header className="cardHeadings">
                <FaBaseballBall />
              </Card.Header>
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle"> Immediate Deployment </Card.Title>
                <Card.Text className="cardTextes">
                  Et vero eos et accusamus et iusto odio dignissimos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CardFooter;
