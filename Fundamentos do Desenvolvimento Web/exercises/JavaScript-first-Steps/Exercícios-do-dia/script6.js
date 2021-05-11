/*6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */

let piece = 'tower';

switch(piece) {
  case('horse'):
  console.log('The horse Walk 4 blocks and the last block get the left or right block like a "L". And is the only piece that can jump above the others.');
  break;

  case('tower'):
  console.log('The tower walk as much as it can and, although, only in a straight line.');
  break;

  case('bishop'):
  console.log('The bishop walks as much block as it can');
  break;

  case('queen'):
  console.log('The queen can move as much as it can, for any side.');
  break;

  case('king'):
  console.log('The king can move for any, although, only one block.');
  break;

  case('pawn'):
  console.log('The pawn only move forward, and only the first move can be two blocks, after this it can move 1 block at a time. Although, when it will kick out an piece, only can in diagonal for 1 block. And finally, arriving in the board final, it can choose one piece to bring back. I know, is a complicated piece.');
  break;
}
