import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import { TfiBell } from "react-icons/tfi";
// import { TbBellFilled } from "react-icons/tb";
import HeroImg from "../../assets/heroImg.png";

import "./bannar.css";

function Bannar() {
  return (
    <section className="business">
      <Container>
        <Row>
          <Col lg={6}>
            <Card className="cardMain">
              <Card.Body>
                <Button variant="" className="buttonOne">
                  Startup Business
                </Button>
                <span className="buttonIconWapper">
                  <TfiBell className="buttonOneIcon" />
                </span>
                <Card.Title className="cardHeading">
                  Empowering startups to fuel their business growth
                </Card.Title>
                <Card.Text className="cardText">
                  Eu posuere mi sed purus proin quisque molestie. Ut amet, at
                  amet, velit
                  <span className="cardPhase d-block">
                    nibh arcu eu. Id sem varius malesuada tincidunt sodales .
                  </span>
                </Card.Text>
                <Button variant="" className="buttonTwo">
                  Get started now{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="text-end ">
            <Image src={HeroImg} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Bannar;
