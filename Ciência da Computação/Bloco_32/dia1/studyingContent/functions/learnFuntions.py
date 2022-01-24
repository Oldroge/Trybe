# How to define and execute a function with python

def soma(x, y):
    return x + y

soma(2, 2)  # parameters here are positional

soma(x=2, y=2)  # here the parameters are named


def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string

print(concat('Rogério'))

# pode ser chamado com 2 parâmetros
print(concat("Carlos", "João"))  # saída: "Carlos, João"

# pode ser chamado com um número n de parâmetros
print(concat("Carlos", "João", "Maria"))  # saída: "Carlos, João, Maria"

# dict é uma função que já vem embutida no python
print(dict(nome="Felipe", sobrenome="Silva", idade=25))  # cria um dicionário utilizando as chaves passadas

print(dict(nome="Ana", sobrenome="Souza", idade=21, turma=1))  # o número de parâmetros passados para a função pode variar

len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

len(obj=[1, 2, 3, 4])  # este código irá falhar

print("Botaro", "Cássio", ", ")  # imprime Botaro Cássio ,

print("Botaro", "Cássio", sep=", ")  # nomeando o terceiro parâmetro, agora temos a saída: Botaro, Cássio
