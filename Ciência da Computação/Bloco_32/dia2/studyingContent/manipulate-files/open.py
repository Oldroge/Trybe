file = open("file.txt", mode="w")  # when opening a file to write, a new file is created even if already exist, subscribing the old one

# To write a file content is used the function write
file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

#!! Only can write in the file only after opened

# with the print function we can write in the file, in other words, also can write in a file through the print.
print("Túlio 22", file=file)

# to write mutiple lines can be used the writelines function. 
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
# notice that it beeing used the '\n' to break lines
file.writelines(LINES)

# IMPORTANT
# OS have some limits when many files are opened, so every when open a file it is important to close it
file.close()
