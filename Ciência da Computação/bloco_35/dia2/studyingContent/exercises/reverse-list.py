#Exercício 2: ReverseCorp Ligue seu cronômetro de novo, e tente desenvolver esta solução, utilizando a iteração. (Se demorar mais que 10 minutos, pare, e prossiga com o conteúdo!)
numbers = [1, 2, 3, 4, 5, 6]
def revert_list(list):
    reversed_list = []

    while len(list) > 0:
        reversed_list.append(list[-1])
        list.pop()
    return reversed_list

print(revert_list(numbers))

# Feito em 6 minutos
