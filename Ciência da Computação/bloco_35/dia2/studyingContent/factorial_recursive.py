def factorial_recursive(n):  # function name and parameter
    if n == 1:  # stop condition
        return 1

    else:
        return n * factorial_recursive(n - 1)  # call itself with a new value


print(factorial_recursive(5))
