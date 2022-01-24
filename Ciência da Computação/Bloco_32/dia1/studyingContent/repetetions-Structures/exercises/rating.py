# Exercício 14: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100] .

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rate in ratings:
    new_ratings.append(rate * 10)

print(new_ratings)

# Exercício 15: Percorra a lista do exercício 14 e imprima "Múltiplo de 3" se o elemento for divisível por 3.

for new_rate in new_ratings:
    if new_rate % 3 == 0:
      print(new_rate)