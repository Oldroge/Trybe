# Exercício 1 Dado um array de números de tamanho n , escreva um algoritmo que retorna true se há no array um número duplicado e false caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.

array = [1, 2, 3, 4, 5, 6, 7,7, 8]

def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    print(previous_number)
    for number in numbers:
        if(previous_number == number): return True

        previous_number = number
    print(previous_number)

    return False

print(contains_duplicate(array))

#Resposta: 0(n log n)