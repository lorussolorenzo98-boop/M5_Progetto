import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav.jsx'
import MyFooter from './components/MyFooter.jsx';
import './App.css'
import Welcome from './components/Welcome.jsx';
import AllTheBooks from './components/AllTheBooks.jsx';
import books from "./data/horror.json"
import { useState } from "react";



function App() {
  const [filteredBooks, setFilteredBooks] = useState(books);

  return (
    <>
     <MyNav setFilteredBooks={setFilteredBooks}/>
     <Welcome/>
     <AllTheBooks filteredBooks= {filteredBooks}/>
     <MyFooter/>
    </>
  )
}

export default App
