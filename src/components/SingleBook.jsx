import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

function SingleBook({ book, selected, setSelected }) {
    return (
        <Col sm={6} md={4} lg={4} xl={3} className="mb-4">
            <Card
                data-testid="book-card"
                className="h-100 shadow-sm"
                style={{
                    border: selected === book.asin ? "3px solid red" : "1px solid #ddd",
                    cursor: "pointer",
                    transition: "0.2s ease"
                }}
            >
                <Card.Img
                    data-testid="book-image"
                    variant="top"
                    src={book.img}
                    onClick={() => setSelected(book.asin)}
                    style={{ height: "320px", objectFit: "cover" }}
                />

                <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ fontSize: "1.1rem", minHeight: "72px" }}>
                        {book.title}
                    </Card.Title>

                    <Card.Text className="mb-3 fw-bold">
                        € {book.price}
                    </Card.Text>

                    <Link to={`/book/${book.asin}`} className="mt-auto">
                        <Button variant="primary" className="w-100">
                            Dettagli
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleBook;