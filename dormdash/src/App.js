import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import OrderFood from './OrderFood.js';
import OrderConfirmed from './OrderConfirmed';
import Nav from './Nav';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="orderfood" element={<OrderFood />} />
              <Route path="orderconfirmed" element={<OrderConfirmed />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);