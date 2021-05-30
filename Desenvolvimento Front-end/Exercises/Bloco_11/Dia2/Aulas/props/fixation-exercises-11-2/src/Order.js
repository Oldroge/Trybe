// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price, id } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
        <p>Your ID: {id}</p>
      </div>
    );
  }
}

export default Order;
