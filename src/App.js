import "./index.css";
import { ReactLenis } from '@studio-freight/react-lenis';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Romana from './pages/Romana';
import English from './pages/English';

function App() {
  
  return (
    <ReactLenis root>
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Romana />} />
          <Route path="/en" element={<English />} />
        </Routes>
    </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
