# Make a program that, give a any 'n' value, such that n > 1, display a square with asterisks from n length, for example:
"""
n = 5

*****
*****
*****
*****
*****
"""

def draw_square(n):
    for row in range(n):
        print(n * '*')

draw_square(4)

# copy by template from browser course
