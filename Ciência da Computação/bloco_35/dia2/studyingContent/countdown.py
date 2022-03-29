# def countdown(n):  # function name and parameter
#     if n == 0:  # stop condition
#         print('END!')
#     else:
#         print(n)
#         countdown(n - 1)  # call itself with a new value


# countdown(5)
def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n+1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]


def fibonacci(n):
    list = []
    if n < 2:
        print('entrou no if')
        return n
    else:
        print('entrou no else')
        test = fibonacci(n-1) + fibonacci(n-2)
        # list.append(test)
        print(test)
        return test

print(fibonacci(5))
