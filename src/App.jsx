import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/video' element={<Video />}/>
          <Route path='/info' element={<Info />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
