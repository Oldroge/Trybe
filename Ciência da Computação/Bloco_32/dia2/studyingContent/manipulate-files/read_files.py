# write
file = open("file2.txt", mode="w")
file.write("Trybe S2")
file.close()

# read
file = open("file2.txt", mode="r")
content = file.read()
print(content)
file.close()  # Dont forget to close file
