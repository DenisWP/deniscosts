import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewPeople from './components/pages/NewPeople'
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
          <Link to="/">Home</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/newpeaple">Nova Pessoa</Link>
      </div>
      <Routes>
          <Container>
              <Route element={<Home/>} exact path='/'/>
              <Route element={<Company/>} exact path='/company'/>
              <Route element={<Contact/>} exact path='/contact'/>
              <Route element={<NewPeople/>} exact path='/newpeaple'/>
          </Container>
      </Routes>
        <p>Denis</p>
    </Router>
  );
}

export default App;
