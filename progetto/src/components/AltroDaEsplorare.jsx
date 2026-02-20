import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AltroDaEsplorare = () => {
  return (
    <>
      <Container fluid className="bg-dark py-3">
        <h2 className="text-white mb-3">Altro da esplorare</h2>
        <Row>
          <Col xs={12} md={4} className="my-1 ">
            <div className="d-flex justify-content-between rounded-4 text-danger bg-secondary border border-secondary py-2 px-3">
              <div>
                <h5>esplora per genere</h5>
              </div>
              <div>
                <h5>{">"}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-1 ">
            <div className="d-flex justify-content-between rounded-4 text-danger bg-secondary border border-secondary py-2 px-3">
              <div>
                <h5>Decenni</h5>
              </div>
              <div>
                <h5>{">"}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-1 ">
            <div className="d-flex justify-content-between rounded-4 text-danger bg-secondary border border-secondary py-2 px-3">
              <div>
                <h5>Attività e stati d'animo </h5>
              </div>
              <div>
                <h5>{">"}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-1 ">
            <div className="d-flex justify-content-between rounded-4 text-danger bg-secondary border border-secondary py-2 px-3">
              <div>
                <h5>worlwide</h5>
              </div>
              <div>
                <h5>{">"}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-1 ">
            <div className="d-flex justify-content-between rounded-4 text-danger bg-secondary border border-secondary py-2 px-3">
              <div>
                <h5>Classifiche</h5>
              </div>
              <div>
                <h5>{">"}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-1 ">
            <div className="d-flex justify-content-between rounded-4 text-danger bg-secondary border border-secondary py-2 px-3">
              <div>
                <h5>Audio Spaziale</h5>
              </div>
              <div>
                <h5>{">"}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-1 ">
            <div className="d-flex justify-content-between rounded-4 text-danger bg-secondary border border-secondary py-2 px-3">
              <div>
                <h5>Video Musicali</h5>
              </div>
              <div>
                <h5>{">"}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-1 ">
            <div className="d-flex justify-content-between rounded-4 text-danger bg-secondary border border-secondary py-2 px-3">
              <div>
                <h5>Nuovi Artisti</h5>
              </div>
              <div>
                <h5>{">"}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-1 ">
            <div className="d-flex justify-content-between rounded-4 text-danger bg-secondary border border-secondary py-2 px-3">
              <div>
                <h5>Hit del Passato</h5>
              </div>
              <div>
                <h5>{">"}</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AltroDaEsplorare;
