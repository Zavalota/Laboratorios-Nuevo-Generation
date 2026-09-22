
#Calculadora 
#Parte 1 :
    #Sumar dos numerosxd (Tarea incial)
#Datos de entrada --> usuario ingresa dos numero.
#Datos de salida --> resultado sum de esos dos numeros ingresados
num1 = float(input("Ingresa numero 1: "))
num2 = float(input("Ingresa numero 2: "))

sum_result = num1 + num2
print(sum_result)

#Parte 2 :
    #Datos de entrada --> usuario ingresa dos numeros.
        #Se da a escojer que quiere hacer si *,%,/- (ya nodice que suma otraves)
            #si es resta serira el num2 -num1 (no num1 -num2)
            #si es div seria el num1 / num2 
            #para modulo no indica el orden xd
    #Datos de salida --> resultado div,mod,res,mul de esos dos numeros ingresados con sus restircciones

#Parte 3 :   
    #sumar 3 numeros (pedir al usuario)

#Parte 4:
    #mezclar operaciones con 3 o mas numeros
    #usar eval xd funciona igual que en js 

# Esto se ejecuta solo desoues de la tarea inicial.
print("\n--- Extra  ---")
print("1 --> 2 numeros de para realizaar operaciones (selecciona: -, *, /, %) ")
print("2 --> 3 numeros para suma")
print("3 --> mezcla de operaciones (e.j --> 2 + 4 - 3)")
print("4 --> salir ")

eleccion = input("\nIngresa una opcion (1-4): ")

if eleccion == '1':
    n1 = float(input("Ingresa el primer numero: "))
    n2 = float(input("Ingresa el segundo numero: "))
    op = input("Selecciona una operacion (-, *, /, %): ")
    
    if op == '-':
        print("Resultado:", n2 - n1)
    elif op == '*':
        print("Resultado:", n1 * n2)
    elif op == '/':
        if n2 != 0:
            print("Resultado:", n1 / n2)
        else:
            print("Error: Nose puede dividir entre 0.")
    elif op == '%':
        print("Resultado:", n1 % n2)
    else:
        print("Esa operacion no existe!!!!!!!!!!!! ")

elif eleccion == '2':
    n1 = float(input("Ingresa el primer numero:  "))
    n2 = float(input("Ingresa el segundo numero:  "))
    n3 = float(input("Ingresa el tercer numero:  "))
    print("Result:", n1 + n2 + n3)

elif eleccion == '3':
    mix = input("Ingresa tu expresion matematica (e.j --> 2 + 4 - 3, 4 * 5 + 1 / 3): ")
    resultado = eval(mix)
    print("Resultado:", resultado)
   
elif eleccion == '4':
    print("ADIOS ALIEN!")
    
else:
    print("esa opcion no existe")