import Container from "react-bootstrap/Container";

const MobilePlayer = () => {
  return (
    <Container
      fluid
      className=" position-fixed bottom-0 start-0 end-0 p-2"
      style={{ zIndex: 1000 }}>
      <div className="bg-dark text-light rounded p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div
            className="bg-secondary rounded d-flex align-items-center justify-content-center"
            style={{ width: 40, height: 40 }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V7.3l-7 1.27V18a3 3 0 1 1-2-2.83z" />
            </svg>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            style={{ cursor: "pointer" }}>
            <polygon points="6,4 20,12 6,20" />
          </svg>

          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            style={{ cursor: "pointer" }}>
            <polygon points="5,4 15,12 5,20" />
            <rect x="16" y="4" width="3" height="16" />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default MobilePlayer;
