import React from 'react';
import { useSelector } from 'react-redux';
import PizzaCard from './PizzaCard';

const PizzaStagesSection = () => {
  const orders = useSelector(state => state.pizza.orders);

  const stages = ['Order Placed', 'Order in Making', 'Order Ready', 'Order Picked'];

  return (
    <div className="pizza-stages-section">
      <h2>Pizza Stages</h2>
      <div className="stages-container">
        {stages.map(stage => (
          <div key={stage} className="stage">
            <h3>{stage}</h3>
            {orders
              .filter(order => order.stage === stage)
              .map(order => (
                <PizzaCard key={order.id} pizza={order} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaStagesSection;