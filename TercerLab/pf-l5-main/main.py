#Probelma
#Usar nombre de funciones ya establecidas por el programa
#que  usen las listas en las dos primers funciones
#usar return no usar print en las funcines todo en el main es de print
#dice qque la logica delas funciones puede sercomo quieras xd


def addmultiplenumbers(numeros):
  return sum(numeros) #la sum permite sumar elementos de un conjunto iterable com listas otuplas

def multiplymultiplenumbers(numeros):
  resultado = 1
  for num in numeros:
    resultado *= num
  return resultado

def isiteven(numero):
  return numero % 2 == 0

def isitaninteger(numero):
  if numero % 1 == 0:
    return True
  else:
    return False


def main(): #segun yo aqui  va la logica de los inputs y prints para el usuario
  print("---------------Calculadora---------------")
  print("Suma de lista de numeros --> [2,4,6] ", addmultiplenumbers([2,4,6]))
  print("Multiplicacion de lista de numeros --> [2,4,6] ", multiplymultiplenumbers([2,4,6]))
  print("¿El numero es par? (222) ", isiteven(2))
  print("¿El 324.89 es entero? ", isitaninteger(4.5))

if __name__=="__main__": #segun esto es el bolierpalte
  main()