import { StrictMode } from 'react'; // 1. React's dev-mode checks
import { createRoot } from 'react-dom/client'; // 2. Modern React rendering
import { BrowserRouter } from 'react-router-dom'; // 3. Routing
import './index.css'; // 4. Global styles
import App from './App.jsx'; // 5. Your root component

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* 👈 Kept for development warnings */}
    <BrowserRouter> {/* 👈 Single router wrapper */}
      <App /> {/* 👈 Only one instance! */}
    </BrowserRouter>
  </StrictMode>
);