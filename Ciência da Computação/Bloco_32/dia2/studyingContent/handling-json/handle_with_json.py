import json  # json is a module that comes embedded, although will need import it


with open("pokemon.json") as file:
    content = file.read()  # read file
    pokemons = json.loads(content)["results"]  # the content is changed in python structure, equivalent dictionary in this case
    # accessing the key results that is where have our pokemon list

print(pokemons[0])  # print the first list pokemon
