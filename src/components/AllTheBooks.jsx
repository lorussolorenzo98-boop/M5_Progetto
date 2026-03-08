import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react";


function AllTheBooks({ filteredBooks, selected, setSelected }) {
     return (
        <Container>
            <Row>
                {filteredBooks.map(book => (
                    <SingleBook
                     key={book.asin} 
                     book={book}
                     selected={selected}
                     setSelected={setSelected}
                     />
                ))}
            </Row>
        </Container>
    );
}

export default AllTheBooks;