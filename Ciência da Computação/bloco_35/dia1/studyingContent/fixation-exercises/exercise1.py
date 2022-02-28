# Exercício 1: Qual a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?

def multiply_array(numbers):
    result = 0
    for number in numbers:
        result *= number

    return result
  
#Complexidade de tempo: A função pode receber um array com n valores, variando o tempo de acordo com a entrada, logo a complexidade é 0(n)

#Complexidade de espaço: A função só armazena apenas um número, indiferente o tamanho da entrada, logo a complexidade é de 0(1)