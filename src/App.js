import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Main.js';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}