import React from 'react';
import { useDispatch } from 'react-redux';
import { updateOrderStage, cancelOrder, completeOrder } from '../redux/pizzaSlice';
import { formatTime } from '../utils/timeformat';

const PizzaCard = ({ pizza }) => {
  const dispatch = useDispatch();
  const isDelayed = pizza.timeSpent[pizza.stage] > 180;

  const handleNextStage = () => {
    const stages = ['Order Placed', 'Order in Making', 'Order Ready', 'Order Picked'];
    const currentIndex = stages.indexOf(pizza.stage);
    if (currentIndex < stages.length - 1) {
      dispatch(updateOrderStage({ id: pizza.id, newStage: stages[currentIndex + 1] }));
    }
  };

  const handleCancel = () => {
    dispatch(cancelOrder(pizza.id));
  };

  const handleOrderPicked = () => {
    dispatch(completeOrder(pizza.id));
  };

  return (
    <div className={`pizza-card ${isDelayed ? 'delayed' : ''}`}>
      <h3>Order ID: {pizza.id}</h3>
      <p>Type: {pizza.type}</p>
      <p>Size: {pizza.size}</p>
      <p>Base: {pizza.base}</p>
      <p>Stage: {pizza.stage}</p>
      {pizza.stage !== 'Order Picked' && (
        <>
          <p>Time in stage: {formatTime(pizza.timeSpent[pizza.stage])}</p>
          <p>Total time: {formatTime(pizza.totalTime)}</p>
        </>
      )}
      {pizza.stage === 'Order in Making' && (
        <p>Remaining time: {formatTime(pizza.remainingTime)}</p>
      )}
      {pizza.stage !== 'Order Ready' && pizza.stage !== 'Order Picked' && (
        <button onClick={handleCancel}>Cancel</button>
      )}
      {pizza.stage !== 'Order Picked' && (
        <button onClick={handleNextStage}>
          {pizza.stage === 'Order Ready' ? 'Next' : 'Next Stage'}
        </button>
      )}
      {pizza.stage === 'Order Picked' && (
        <button onClick={handleOrderPicked}>Order Picked</button>
      )}
    </div>
  );
};

export default PizzaCard;