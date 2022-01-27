import random

random_number = random.randint(1, 10)  # choose random number between 1 and 10
guess = ""

while guess != random_number:  # while dont guess the number
    guess = int(input("Qual o seu palpite? "))  # ask the user a number
    # is used the int moethod to convert number to int cause the input always output a str

print("O número sorteado era: ", guess)
