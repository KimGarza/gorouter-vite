import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Routes replaces Switch */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App
