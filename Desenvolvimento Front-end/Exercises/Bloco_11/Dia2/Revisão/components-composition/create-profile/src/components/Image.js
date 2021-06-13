// arquivo Image.js
import React from 'react';

/*Image captura a imagem do usuário através das props, fiz a desestruturação para ficar legível */
class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;
