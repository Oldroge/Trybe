files = []
for index in range(10240):
    files.append(open(f"files{index}.txt", "w"))

# This for will open many files and as saw before, the OS accept a determined number of files opened, so it probably returns an error.
