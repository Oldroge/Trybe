import time

number_array = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]

def sum_array(numbers):
    sum = 0
    for number in numbers:
            sum += number

    return sum

start = time.perf_counter()
print(sum_array(number_array))
end = time.perf_counter()
print("tempo de resposta: ", end - start)

# The order complexity is how the execution time grow according input size
