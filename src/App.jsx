import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav.jsx'
import MyFooter from './components/MyFooter.jsx';
import './App.css'
import Welcome from './components/Welcome.jsx';
import AllTheBooks from './components/AllTheBooks.jsx';



function App() {

  return (
    <>
     <MyNav/>
     <Welcome/>
     <AllTheBooks/>
     <MyFooter/>
    </>
  )
}

export default App
