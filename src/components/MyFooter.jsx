import { Container, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContextProvider"

function MyFooter() {
  const { theme } = useContext(ThemeContext)

  return (
    <footer
      className={`mt-5 py-4 border-top ${
        theme === "dark" ? "bg-dark text-light border-secondary" : "bg-light text-dark"
      }`}
    >
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5>EpicBooks</h5>
            <p className="mb-0">Il tuo store di libri horror.</p>
          </Col>

          <Col md={4} className="mb-3">
            <h6>Links</h6>
            <p className="mb-1">Home</p>
            <p className="mb-1">Browse</p>
            <p className="mb-0">About</p>
          </Col>

          <Col md={4} className="mb-3">
            <h6>Info</h6>
            <p className="mb-0">© {new Date().getFullYear()} EpicBooks</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter