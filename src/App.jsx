import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { updateTimes } from './redux/pizzaSlice';
import OrderForm from './components/OrderForm';
import PizzaStagesSection from './components/PizzaStagesSection';
import MainSection from './components/MainSection';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(updateTimes());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <Router>
      <div className="app-container">
        <h1>Pizza Shop</h1>
        <nav className="nav-menu">
          <Link to="/order" className="nav-link">Place Order</Link>
          <Link to="/tracking" className="nav-link">Track Orders</Link>
        </nav>
        <Routes>
          <Route path="/order" element={<OrderPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/" element={<Navigate to="/order" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

const OrderPage = () => {
  return (
    <div className="order-page">
      <OrderForm />
    </div>
  );
};


const TrackingPage = () => {
  return (
    <div className="tracking-page">
      <PizzaStagesSection />
      <MainSection />
    </div>
  );
};

export default App;