class User:
    def __init__(self, name, email, password):
        """Constructor method of the User class. Note that the first parameter should be 'self'. This is a Python particularities, lets talk more about it ahead"""
        self.name = name
        self.email = email
        self.password = password

# to invoke the constructor method, the syntax is class_name(param 1, param 2)
# Note that the paramether self were skipped -- a python detail
meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)

# The 'meu_user' variable contains the created object by constructor from User class!
