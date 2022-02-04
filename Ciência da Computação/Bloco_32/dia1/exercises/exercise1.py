# Exercise 1 - Create a function that receive 2 numbers and return bigger one

def big_number(n1, n2):
    if (n1 > n2):
        return f'{n1} is bigger than {n2}'
    else:
        return f'{n2} is bigger than {n1}'

print(big_number(4, 3))
print(big_number(2, 1))