#Exercício 1: Fibonacci: Ligue o cronômetro, e faça a medição de quanto tempo você leva para resolver este problema. Se demorar mais de 10 minutos, pare! Seu tempo acabou.

def fibonacci(quantity):
    init = [0, 1]
    while len(init) != quantity:
      init.append(init[-2] + init[-1])
    return init

print(fibonacci(10))

#Feito em 8 minutos