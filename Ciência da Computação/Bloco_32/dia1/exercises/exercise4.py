# Create a function that receive a names list and return the name with bigger characters quatity. For example, for ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'], the return sould be Fernanda.

def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name

print(find_biggest_name(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

# copy by template