import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Info from './pages/Info';
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/pink" element={<Video />} />
          <Route path="/video/blue" element={<Video />} />
          <Route path="/video/white" element={<Video />} />
          <Route path='/info/pink' element={<Info />}/>
          <Route path='/info/blue' element={<Info />}/>
          <Route path='/info/white' element={<Info />}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
