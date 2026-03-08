import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav.jsx'
import MyFooter from './components/MyFooter.jsx';
import './App.css'
import Welcome from './components/Welcome.jsx';
import AllTheBooks from './components/AllTheBooks.jsx';
import books from "./data/horror.json"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from './context/ThemeContextProvider.jsx';
import { Col, Container, Row } from 'react-bootstrap';
import CommentArea from "./components/CommentArea.jsx"
import BookDetails from "./components/BookDetails"



function App() {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selected, setSelected] = useState(null)
  const { theme, toggleTheme } = useContext(ThemeContext)
  useEffect(() => {
    console.log(theme)
  }, [theme])



  return (
    <div className={theme === "dark" ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
      <MyNav setFilteredBooks={setFilteredBooks} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <>
                <Container className="py-3">
                  <Welcome />
                  <Row className="g-4 mt-1">
                    <Col lg={8}>
                      <AllTheBooks
                        filteredBooks={filteredBooks}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    </Col>
                    <Col lg={4}>
                      <CommentArea selected={selected} />
                    </Col>
                  </Row>
                </Container>
              </>
            </>
          }
        />
        <Route path="/book/:asin" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <MyFooter />
    </div>
  )
}

export default App
