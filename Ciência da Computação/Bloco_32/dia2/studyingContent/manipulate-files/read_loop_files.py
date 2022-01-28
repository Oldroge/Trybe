# write
file = open("file3.txt", mode="w")
LINES = ["Hello\n", "world\n", "beauty\n", "from\n", "Python\n"]
file.writelines(LINES)
file.close()

# read
file = open("file3.txt", mode="r")
for line in file:
    print(line)  # dont forget that the break line also is a line character
file.close()
