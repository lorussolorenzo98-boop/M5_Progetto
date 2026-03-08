import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data/horror.json";
import CommentArea from "./CommentArea";

function BookDetails() {
  const { asin } = useParams();

  const selectedBook = books.find((book) => book.asin === asin);

  if (!selectedBook) {
    return <p className="p-4">Libro non trovato</p>;
  }

  return (
    <Container className="py-4">
      <Row className="g-4 align-items-start">
        <Col lg={5}>
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src={selectedBook.img}
              alt={selectedBook.title}
              style={{ maxHeight: "650px", objectFit: "cover" }}
            />
          </Card>
        </Col>

        <Col lg={7}>
          <h1 className="mb-3">{selectedBook.title}</h1>
          <p className="fs-4 fw-bold mb-4">€ {selectedBook.price}</p>

          <div className="p-3 border rounded shadow-sm bg-body-tertiary">
            <CommentArea selected={asin} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BookDetails;