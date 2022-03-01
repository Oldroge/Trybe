# A estrutura deve estar ordenada para que a busca binária funcione
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def binary_search_iterative(array, element):
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while (start <= end):
        print('start', start)
        print("Subarray in step {}: {}".format(step, str(array[start: end + 1])))
        step = step + 1
        mid = (start + end) // 2
        print('mid', mid)
        print('antes do if', array[mid])
        if element == array[mid]:
          return mid

        if element < array[mid]:
          print('segundo if', array[mid])

          end = mid - 1
          print('end', end)
        else:
          print('start, entra aqui', start)
          start = mid + 1
          print('start adiciona + 1 no mid:', start)

    return - 1


print(binary_search_iterative(data, 7))
