import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import ExperiencePage from './pages/ExperiencePage';
import ProjectPage from './pages/ProjectPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/experience/:slug" element={<ExperiencePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
