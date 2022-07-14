import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route, Link,} from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom';
import Moscow from "./components/Moscow"
import Spb from "./components/Spb"

const App = () => {

  return (
    <Router>
      <div className='container'>
        <Header menu={["Moscow", "Solevoi-city"]} />
        <div className='content'>
          <Routes>
            <Route path="/Moscow/" element={<Moscow />} />
            <Route path="/Solevoi-city/" element={<Spb />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App