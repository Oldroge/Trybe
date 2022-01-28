# write
file = open("file.dat", mode="wb")
file.write(b"C\xc3\xa1ssio 30")  # the prefix b in string means that your value is encoded
file.close()

# read
file = open("file.dat", mode="rb")
content = file.read()
print(content)  # output: b'C\xc3\xa1ssio 30'
file.close()  # dont foget, close the file
