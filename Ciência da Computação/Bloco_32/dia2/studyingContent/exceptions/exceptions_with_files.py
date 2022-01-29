try:
    file = open("file.txt", "r")
except OSError:
    # it will be executed case have a exception
    print("non-existent file")
else:
    # it will be executed if everything run well at try
    print("file manipulated and closed with sucess")
    file.close()
finally:
    # it will be always executed, será sempre executado, regardless of error
    print("Attempt to open file")
