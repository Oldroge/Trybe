import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)
# importing the sys module, when running the script in the terminal with parameters, all it will be avaible through a variable called sys.argv as saw above