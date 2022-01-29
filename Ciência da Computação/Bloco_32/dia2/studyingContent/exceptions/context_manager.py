# Create a context, limiting the scope where the file is open
# The "as" used here is only to assign the value used at context to variable file
with open("file.txt", "w") as file:
    file.write("Michelle 27\n")
# out of context, the file were closed
print(file.closed)
