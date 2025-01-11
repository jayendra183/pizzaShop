import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../redux/pizzaSlice';

const OrderForm = () => {
  const [order, setOrder] = useState({
    type: 'Veg',
    size: 'Medium',
    base: 'Thin',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderCount = useSelector(state => state.pizza.orders.length);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderCount < 10) {
      dispatch(addOrder(order));
      setOrder({ type: 'Veg', size: 'Medium', base: 'Thin' });
      navigate('/tracking'); 
    } else {
      alert('Not taking any order for now');
    }
  };

  return (
    <div className="order-form-container">
      <h2>Place Your Pizza Order</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <select name="type" value={order.type} onChange={handleChange}>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
        <select name="size" value={order.size} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <select name="base" value={order.base} onChange={handleChange}>
          <option value="Thin">Thin</option>
          <option value="Thick">Thick</option>
        </select>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;