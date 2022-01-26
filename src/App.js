import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import H1 from './components/H1'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<H1 />} />
        <Route path="home" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
