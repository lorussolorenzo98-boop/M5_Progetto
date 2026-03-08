import { useState } from "react";
import {Col, Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

function SingleBook({book}) {
    const [selected, setSelected] = useState(false)
    return (
            <Col sm={6} md={4} lg={3}>
                <Card style={{border: selected ? "3px solid red" : "none", cursor: "pointer"}}>
                    <Card.Img variant="top" src={book.img} onClick={() => setSelected(!selected)} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                            {book.price}
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                        {selected && <CommentArea book={book}/>}
                    </Card.Body>
                </Card>
            </Col>
    );
}

export default SingleBook;