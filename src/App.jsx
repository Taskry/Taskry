import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

function App() {
  return (
    <Router>
      <Header /> {/* 모든 페이지에 공통적으로 나타날 헤더 컴포넌트 */}
      {/* <nav style={{padding: '10px'}}> */}
      <nav className="p-2">
        <Button style={{ marginRight: '10px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>프로젝트 관리</Link>
        </Button>
        <Button>
          <Link to="/board" style={{ textDecoration: 'none', color: 'inherit' }}>칸반보드</Link>
        </Button>
      </nav>
      <main style={{ padding: '20px', minHheight: '100%', display: 'flex'}}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/board" element={<BoardPage />} />
        </Routes>
      </main>
      <footer>
        <p>© DAN_DA_DAN</p>
      </footer>
    </Router>
  );
}

export default App;