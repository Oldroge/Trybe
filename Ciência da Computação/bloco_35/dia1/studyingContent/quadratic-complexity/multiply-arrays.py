import time

start = time.time()
def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result
end = time.time()


meu_array = [1,2,3,4,5]

multiply_arrays(meu_array, meu_array)
print(end - start)

# start = time.time()
# def some_algorithm(array1, array2, array3):
#     result = []
#     number_of_iterations = 0

#     for number1 in array1:
#         print(f'Array 1: {number1}')
#         for number2 in array2:
#             print(f'Array 2: {number2}')
#             for number3 in array3:
#                 print(f'Array 3: {number3}')
#                 result.append(number1 * number2 * number3)
#                 number_of_iterations += 1

#     print(f'{number_of_iterations} iterações!')
#     return result
# end = time.time()

# meu_array = [1,2,3,4,5]

# some_algorithm(meu_array, meu_array, meu_array)
# print(end-start)