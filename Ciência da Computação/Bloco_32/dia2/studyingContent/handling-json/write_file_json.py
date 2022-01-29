import json

# Read of all pokemons
with open("pokemon.json") as file:
    pokemons = json.load(file)["results"]

# Separate only the grass type
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# open the file to write only grass type pokemons
with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    ) #  Python conversion to the json format (str)
    file.write(json_to_write)
