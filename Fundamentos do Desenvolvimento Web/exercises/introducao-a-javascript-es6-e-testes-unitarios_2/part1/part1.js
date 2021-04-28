const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/* 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". */

const customerInfo = (order) => {
  const delivered = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const customerPhone = order.phoneNumber;
  const customerAdress = order.address.street;
  const customerNumberStrees = order.address.number;
  const customerAparmentNumber = order.address.apartment;

  console.log(`Olá, ${delivered}, entrega para: ${customer}, Telefone: ${customerPhone}, R. ${customerAdress} Nº ${customerNumberStrees}, AP: ${customerAparmentNumber}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
