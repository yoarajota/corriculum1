import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import H1 from './components/H1'
import Home from './components/Home'
import { Grid } from '@mui/material';

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{justifyContent: 'center', textAlign: 'center', alignItems: 'center'}}>
        <Router>
          <Routes>
            <Route path="/" element={<H1 />} />
            <Route path="home" exact element={<Home />} />
          </Routes>
        </Router>
      </Grid>
    </Grid>
  );
}

export default App;
