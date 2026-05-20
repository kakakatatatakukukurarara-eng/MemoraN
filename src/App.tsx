import { Routes, Route, Link } from 'react-router-dom';

import './styles/global.css';

import Home from './pages/Home';

import Study from './pages/Study';

import Decks from './pages/Decks';

import Analytics from './pages/Analytics';

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>MemoraN</h1>

        <nav>
          <Link to="/">Home</Link>

          <Link to="/study">Study</Link>

          <Link to="/decks">Decks</Link>

          <Link to="/analytics">Analytics</Link>
        </nav>
      </aside>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/study" element={<Study />} />

          <Route path="/decks" element={<Decks />} />

          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;