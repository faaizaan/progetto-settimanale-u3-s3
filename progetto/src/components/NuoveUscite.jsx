import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NuoveUscite = () => {
  const URL =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Errore nel recupero dati");
        const dato = await res.json();
        setData(dato.data);
      } catch (err) {
        console.log("errore", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container fluid className="bg-dark py-3">
        <h3 className="text-white mb-3">Nuove Uscite</h3>
        <div className="d-block d-md-none">
          <Row className="g-2 mb-2">
            {data.slice(0, 3).map((res, i) => (
              <Col
                xs={4}
                key={i}
                className="d-flex flex-column align-items-center text-white">
                <img
                  src={res.album.cover}
                  alt={res.album.title}
                  className="w-100 img-fluid"
                />
                <p className="text-center mb-0 ">{res.album.title}</p>
                <p className="text-center mb-0 ">{res.artist.name}</p>
              </Col>
            ))}
          </Row>
          <Row className="g-2 mb-2">
            {data.slice(3, 6).map((res, i) => (
              <Col
                xs={4}
                key={i}
                className="d-flex flex-column align-items-center text-white">
                <img
                  src={res.album.cover}
                  alt={res.album.title}
                  className="w-100 img-fluid"
                />
                <p className="text-center mb-0">{res.album.title}</p>
                <p className="text-center mb-0">{res.artist.name}</p>
              </Col>
            ))}
          </Row>
        </div>

        <div className="d-none d-md-block">
          <Row className="g-2 mb-2 d-flex flex-row">
            {data.slice(0, 5).map((res, i) => (
              <Col
                key={i}
                className="d-flex flex-column align-items-center text-white"
                style={{ flex: "0 0 20%" }}>
                <img
                  src={res.album.cover}
                  alt={res.album.title}
                  className="w-100 img-fluid"
                />
                <p className="text-center mb-0">{res.album.title}</p>
                <p className="text-center mb-0">{res.artist.name}</p>
              </Col>
            ))}
          </Row>
          <Row className="g-2 mb-2 d-flex flex-row">
            {data.slice(5, 10).map((res, i) => (
              <Col
                key={i}
                className="d-flex flex-column align-items-center text-white"
                style={{ flex: "0 0 20%" }}>
                <img
                  src={res.album.cover}
                  alt={res.album.title}
                  className="w-100 img-fluid"
                />
                <p className="text-center mb-0">{res.album.title}</p>
                <p className="text-center mb-0">{res.artist.name}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default NuoveUscite;
