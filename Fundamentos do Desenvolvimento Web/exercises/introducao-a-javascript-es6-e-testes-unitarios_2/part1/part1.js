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

/* 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". 
- Note que o parâmetro da função já está sendo passado na chamada da função. */

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

console.log('==========================================');

/* 2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

- Modifique o nome da pessoa compradora.
- Modifique o valor total da compra para R$ 50,00. */
const orderModifier = (order) => {
  const newCustomerName = Object.assign({}, order);
  newCustomerName.name = 'Luiz Silva';
  newCustomerName.payment.total = '50';
  console.log(`Olá, ${newCustomerName.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${newCustomerName.payment.total},00`);
}

orderModifier(order);
