#probelma 
 #hacer un juego de trivia
    #los input dentro de main()
    #los print van en el main
 #recibir un numero en a la funcion obligaria trivia_fetch(numero)
    #y una ves reciba el numero debe obetener informacion relacinada con ese numeroxd
    #y debe regresar un diccionario de python de esa informacion
    
def trivia_fetch(num):
  #segun uan trivia es una serie de preguntaas en un juego y si las reslpondes ganas un premio
  trivia = {
    "number": num, #si no no cumple es number aunque nose idnidca lo indico al  compiñar test
    "es_par": num % 2 == 0,
    "al_cuadrado": num ** 2,
    "es_positivo": num > 0
  }
  return trivia

def main():
  print("Hello learners!") 
  respuesta_String = input("Ingresa un numero entero para conocer su trivia: ")
  numero = int(respuesta_String)

  diccionario = trivia_fetch(numero)

  #mostrar resultado con for especial in
  print("\n\t LA TRIVIA MAGICA ESSSSS ????!!!!")
  for clave, valor in diccionario.items():
    print(clave, " ",valor)


if __name__=="__main__":
  main()

