/* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
 - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
 - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
 - Exemplo: bishop -> diagonals */



 let piece = 'pawn';

 piece = piece.toLowerCase();

 if (piece !== 'king' && piece !== 'queen' && piece !== 'bishop' && piece !== 'rook' && piece !== 'knight' && piece !== 'pawn') {
  console.log('Error! It is not a valid piece! Try Again!')
 }

 switch(piece) {
  case 'king':
    console.log('The king moves exactly one square horizontally, vertically, or diagonally. A special move with the king known as castling is allowed only once per player, per game ')

  case 'queen':
    console.log('The queen moves any number of vacant squares horizontally, vertically, or diagonally.')
  
  case 'bishop':
    console.log('A bishop moves any number of vacant squares diagonally.')
  
  case 'rook':
    console.log('A rook moves any number of vacant squares horizontally or vertically. It also is moved when castling.')
  
  case 'knight':
    console.log('A knight moves to the nearest square not on the same rank, file, or diagonal. (This can be thought of as moving two squares horizontally then one square vertically, or moving one square horizontally then two squares vertically—i.e. in an "L" pattern.) The knight is not blocked by other pieces: it jumps to the new location.')

  case 'pawn':
    console.log('Pawns have the most complex rules of movement:')
    console.log('- A pawn moves straight forward one square, if that square is vacant. If it has not yet moved, a pawn also has the option of moving two squares straight forward, provided both squares are vacant. Pawns cannot move backwards.')
    console.log('- A pawn, unlike other pieces, captures differently from how it moves. A pawn can capture an enemy piece on either of the two squares diagonally in front of the pawn (but cannot move to those squares if they are vacant).')
 }
