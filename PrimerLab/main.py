#Problema:
#Divisible entre 3 y 5  FizzBuzz
#Divisible entre 3 Fizz
#Divisible entre 5 Buzz


for i in range(1, 1001):
    if (i % 3 == 0 and i % 5 == 0):
        print("Fizzbuzz") #cambiar la b por minuscula
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)


    