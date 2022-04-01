import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashBoardPage';
import PostsPage from './pages/PostsPage';
import './index.css';


// Redux Thunk: Async middleware for Redux
// Redux Devtools: connects Redux app to Redux DevTools
// Router has 2 different ways of navigating, Navigate or useNavigate
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;