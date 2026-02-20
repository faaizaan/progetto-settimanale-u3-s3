import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PrimaParte = () => {
  return (
    <>
      <Container fluid className="bg-dark py-3">
        <h4 className="text-white">Nuovi episodi radio {">"}</h4>
        <Row className="g-2 row-cols-3 row-cols-md-5">
          <Col className="d-flex flex-column align-items-center px-2 text-white">
            <img
              src="../src/assets/images/2a.png"
              alt="Prologo con abuelo"
              className="w-100 img-fluid"
            />
            <p className="text-center mb-0">Prologo con abuelo</p>
          </Col>
          <Col className="d-flex flex-column align-items-center px-2 text-white">
            <img
              src="../src/assets/images/2b.png"
              alt="The Wanderer"
              className="w-100 img-fluid"
            />
            <p className="text-center mb-0">The Wanderer</p>
          </Col>
          <Col className="d-flex flex-column align-items-center px-2 text-white">
            <img
              src="../src/assets/images/2c.png"
              alt="Micheal Buble e Carly Pearce"
              className="w-100 img-fluid"
            />
            <p className="text-center mb-0">Micheal Buble e Carly Pearce</p>
          </Col>
          <Col className="d-flex flex-column align-items-center d-none d-md-block px-2 text-white ">
            <img
              src="../src/assets/images/2d.png"
              alt="Stephan Moccio"
              className="w-100 img-fluid"
            />
            <p className="text-center mb-0">Stephan Moccio</p>
          </Col>
          <Col className="d-flex flex-column align-items-center d-none d-md-block px-2 text-white ">
            <img
              src="../src/assets/images/2e.png"
              alt="Chart Spotlight"
              className="w-100 img-fluid"
            />
            <p className="text-center mb-0">Chart Spotlight</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PrimaParte;

<Col md={2} className="d-none d-md-block px-2"></Col>;
