import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelOrder } from '../redux/pizzaSlice';
import { formatTime } from '../utils/timeformat';

const MainSection = () => {
  const orders = useSelector(state => state.pizza.orders);
  const deliveredCount = useSelector(state => state.pizza.deliveredCount);
  const dispatch = useDispatch();

  const handleCancel = (id) => {
    dispatch(cancelOrder(id));
  };

  return (
    <div className="main-section">
      <h2>Main Section</h2>
      <h3>Pizzas in Progress</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Stage</th>
            <th>Total Time Spent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.stage}</td>
              <td>{formatTime(order.totalTime)}</td>
              <td>
                {order.stage !== 'Order Ready' && order.stage !== 'Order Picked' && (
                  <button onClick={() => handleCancel(order.id)}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
          <tr className="total-row">
            <td>Total Orders Delivered</td>
            <td colSpan={2}>{deliveredCount}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainSection;