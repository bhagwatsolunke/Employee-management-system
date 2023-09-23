import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponents from './components/HeaderComponents';
import ListEmployee from './components/ListEmployee';
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponents />
          <div className="container">
          <Routes>
           <Route exact path="/" element={<ListEmployee/>} />
          <Route exact path="/employee" element={<ListEmployee/>} />
          <Route exact path="/add-employee" element={<CreateEmployee/>} />
        </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>


  );
}

export default App;
