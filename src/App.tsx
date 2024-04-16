import Home from './pages/Home';
import Test from './pages/Test'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Routes replaces Switch */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  )
}

export default App
