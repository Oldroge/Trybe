#Exercício 3: Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de O(n³) !

def nested_algorithm(array1, array2, array3):
    result_array = []
    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result_array.append(number1 + number2 + number3)
    return result_array

array_number = [1,2,3,4,5]

print(nested_algorithm(array_number, array_number, array_number))
