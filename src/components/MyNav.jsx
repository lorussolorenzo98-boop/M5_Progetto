import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import books from "../data/horror.json"

function MyNav({setFilteredBooks}) {
  const filterBooks = (event) => {

    const bookArray = books.filter((book) => book.title.toLowerCase().includes(event.target.value.toLowerCase().trim()))
    setFilteredBooks(bookArray)
    console.log(event.target.value)
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
          <Form.Control
            onKeyUp={filterBooks}
            placeholder="Cerca"
          />
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav