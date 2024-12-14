import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage';
import About from './pages/AboutPage';
// import Topic from './pages/Topic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/topics/:topicId" element={<Topic />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
