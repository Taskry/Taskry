import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage';
import IconPage from './pages/IconPage';
import ColorPage from './pages/ColorPage';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header /> {/* 모든 페이지에 공통적으로 나타날 헤더 컴포넌트 */}
        <nav className="p-2">
          <Button style={{ marginRight: '10px' }}>
            <Link to="/">프로젝트 관리</Link>
          </Button>
          <Button style={{ marginRight: '10px' }}>
            <Link to="/board">칸반보드</Link>
          </Button>
          <Button style={{ marginRight: '10px' }}>
            <Link to="/icon">Icon</Link>
          </Button>
          <Button style={{ marginRight: '10px' }}>
            <Link to="/color">색상표</Link>
          </Button>
        </nav>
        <main className="flex-grow overflow-y-auto p-4 bg-white">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/icon" element={<IconPage />} />
            <Route path="/color" element={<ColorPage />} />
          </Routes>
        </main>
        <footer>
          <p>© DAN_DA_DAN</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
