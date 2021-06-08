import React from 'react';

/*Componente pai, recebe componente filho através das props, pode retornar quanto um array como apenas um único elementos */
const ComponentePai = (props) => {
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ComponentePai;
