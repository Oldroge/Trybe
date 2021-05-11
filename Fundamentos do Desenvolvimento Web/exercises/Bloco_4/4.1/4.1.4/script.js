  let candidate = 'repproved';

  switch (candidate) {
    case 'approved':
      console.log('Congratulations, you are approved!!!')
      break;

    case 'list':
      console.log('You are on the waiting list.')
      break;

    case 'repproved':
      console.log('I am so sorry, try in the next time ):')
      break;

    default:
      console.log('INVALID COMMAND')
    }

