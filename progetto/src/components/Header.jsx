import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Container fluid className="bg-dark py-3">
        <h2 className="text-white">Novità</h2>
        <hr />

        <Row className="g-2 scroll-row">
          <Col className="col-card">
            <h4 className="text-white">NUOVA STAZIONE RADIO</h4>
            <p className="text-white">
              Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
            </p>
            <div className="mt-auto">
              <img
                src="../src/assets/images/1a.png"
                alt="Chill"
                className="w-100 img-fluid"
              />
            </div>
          </Col>

          <Col className="col-card">
            <h4 className="text-white">NUOVA STAZIONE RADIO</h4>
            <p className="text-white">Ecco la nuova casa della musica latina</p>
            <div className="mt-auto">
              <img
                src="../src/assets/images/1b.png"
                alt="Musica"
                className="w-100 img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
