// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

/*User profile cria uma lógica que pega o nome e email do usuário, desestruturei o user para ficar mais legível o código */

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p> { user.name } </p>
        <p> { user.email } </p>
        <Image source={user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;
