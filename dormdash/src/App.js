import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home.js';
import OrderFood from './Components/OrderFood.js';
import OrderConfirmed from './Components/OrderConfirmed';
import Nav from './Components/Nav';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="orderfood" element={<OrderFood />} />
              <Route path="api/orderconfirmed" element={<OrderConfirmed />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);