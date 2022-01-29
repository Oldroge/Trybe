import json

# read all pokemons
with open("pokemon.json") as file:
    pokemons = json.load(file)["results"]

# separate only the grass type
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# open it file to write
with open("grass_pokemons.json", "w") as file:
    # write at file already changed in json format the estructure
    json.dump(grass_type_pokemons, file)
