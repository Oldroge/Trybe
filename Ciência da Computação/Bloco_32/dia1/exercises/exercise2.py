# exercise 2 - Calculate arithmetic values average contained in a list

def arithmetic_mean(list):
    counter = 0
    for num in list:
        counter += num
    
    return f'The arithmetic mean from list {list} is: {counter / len(list)}'

print(arithmetic_mean([2, 3, 3, 5, 7, 10]))
