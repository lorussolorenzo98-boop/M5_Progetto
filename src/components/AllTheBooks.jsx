import books from "../data/horror.json"
import { Container, Row, Form, InputGroup } from "react-bootstrap";
import SingleBook from "./SingleBook";



function AllTheBooks({ filteredBooks }) {
    //const [search, setSearch] = useState('');
    //const [filteredBooks, setFilteredBooks] = useState(books);
    //const filterBooks = (event) => {
    //setSearch(event.target.value)
    //const bookArray = books.filter((book) => book.title.toLowerCase().includes(event.target.value.toLowerCase().trim()))
    //setFilteredBooks(bookArray)
    //console.log(event.target.value)
    //}


    return (
        <Container>
            {/*<InputGroup className="mb-3">
                <Form.Control
                    onKeyUp={filterBooks}
                    placeholder="Cerca"
                />
            </InputGroup>*/}

            <Row>
                {filteredBooks.map(book => (
                    <SingleBook key={book.asin} book={book} />
                ))}
            </Row>
        </Container>
    );
}

export default AllTheBooks;