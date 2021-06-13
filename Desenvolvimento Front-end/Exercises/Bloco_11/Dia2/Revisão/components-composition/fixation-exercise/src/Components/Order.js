// arquivo Order.js
import React from 'react';

/*Componente filho, a lógica pega o usuário, produto e preço de compra. Criado uma variável com this.props.order pra facilitar a legibilidade. */
class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;
