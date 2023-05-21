
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards'


function App() {
  return (
    <>
    <Router>
     <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardsDetails />} />
      </Routes>
    </Router>
      
      
    </>
  );
}

export default App;
