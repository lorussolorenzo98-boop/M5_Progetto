import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import books from "../data/horror.json";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';
import { Link } from "react-router-dom";

function MyNav({ setFilteredBooks }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const filterBooks = (event) => {
    const bookArray = books.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase().trim())
    );
    setFilteredBooks(bookArray);
  };

  return (
    <Navbar
      expand="lg"
      bg={theme === "dark" ? "dark" : "light"}
      data-bs-theme={theme === "dark" ? "dark" : "light"}
      className="shadow-sm mb-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">EpicBooks</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-2">
            <Button
              variant={theme === "dark" ? "outline-light" : "outline-dark"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </Button>

            <Form.Control
              type="search"
              placeholder="Cerca un libro..."
              onChange={filterBooks}
              style={{ width: "260px" }}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;