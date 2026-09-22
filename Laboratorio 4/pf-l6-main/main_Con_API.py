import requests
#probelma con API
 #cambio en la funcion principal trivia_fetch ya no va a ser con un diccionario
 #ahora se usara la libreira request para ir a internet y pedir preguntas y con respuestas de esa api
#isntalar libreria com pip pq si no no lo reconoce


def trivia_fetch(num):
    url = f"https://opentdb.com/api.php?amount={num}"
    response = requests.get(url)
    trivia = response.json() #tranforma la resquest web en un diccionario json
    return trivia

def main():
    print("MUAJAJAAA Bienvenido al juego de TRIVIA!") 
    cantidad= int(input("¿Cuantas preguntas quieres? "))
    
    trivia = trivia_fetch(cantidad)

    #reto:
    # La API guarda todas las preguntas dentro de una clave results 
    # y questions esta la pregunta se ven cuando imprimes solo la trivia

    contador = 1
    for pregunta in trivia["results"]:
        print(f"{contador}. {pregunta['question']}")
        contador += 1
    print(trivia)

if __name__=="__main__":
  main()

