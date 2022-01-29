import json  # json is a module that comes embedded, although will need import it


with open("pokemon.json") as file:
    content = file.read()  # read file
    pokemons = json.loads(content)["results"]  # the content is changed in python structure, equivalent dictionary in this case
    # accessing the key results that is where have our pokemon list

print(pokemons[0])  # print the first list pokemon

# other way to read the json is with the load method, the difference between both is: the loads read file from JSON text, already load read file from file.

with open("pokemon.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])  # print the first list pokemon