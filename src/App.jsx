import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

function App() {
  return (
    <Router>
      <Header /> {/* 모든 페이지에 공통적으로 나타날 헤더 컴포넌트 */}
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Button onClick={() => console.log('Home Nav')} style={{ marginRight: '10px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </Button>
        <Button onClick={() => console.log('About Nav')}>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
        </Button>
      </nav>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <footer>
        <p>© DAN_DA_DAN</p>
      </footer>
    </Router>
  );
}

export default App;