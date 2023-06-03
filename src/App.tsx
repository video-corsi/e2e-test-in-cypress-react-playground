import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home.tsx';
import { PlaygroundPage } from './pages/Playground.tsx';

function App() {
  return (
    <BrowserRouter>
      <Link to="/home">Home</Link> | <Link to="/playground">Playground</Link>
      <hr/>
      <Routes>
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/home" /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
