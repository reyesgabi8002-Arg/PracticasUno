alumnos = [
    {"nombre": "Gastón", "materia_favorita": "Redes", "edad": 18},

    {"nombre": "Edwar", "materia_favorita": "Web","edad": 20},

    {"nombre": "Santi", "materia_favorita": "Ingles","edad": 19},

    {"nombre": "Eve", "materia_favorita": "S.O","edad": 17},
       
    {"nombre": "Mily", "materia_favorita": "Etica", "edad": 21},
]
def buscar_alumno():
    nombre_buscado = input("Ingresa el nombre a buscar: ")
    encontrado = False
    for alumno in alumnos:
        if alumno["nombre"] == nombre_buscado:
            print("Nombre:", alumno["nombre"])
            print("Materia favorita:", alumno["materia_favorita"])
            print("Edad:", alumno["edad"])
            encontrado = True
            break
    if not encontrado:
        print("Alumno no encontrado")

buscar_alumno()
