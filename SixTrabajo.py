alumnos = [
    {"nombre": "Gastón", "materia_favorita": "Redes", "edad": 18},

    {"nombre": "Edwar", "materia_favorita": "Web","edad": 20},

    {"nombre": "Santi", "materia_favorita": "Ingles","edad": 19},

    {"nombre": "Eve", "materia_favorita": "S.O","edad": 17},
       
    {"nombre": "Mily", "materia_favorita": "Etica", "edad": 21},
]

total = len(alumnos)
mayores = 0
for alumno in alumnos:
    if alumno["edad"] > 16:
        mayores += 1

print("Cantidad total de alumnos:", total)
print("Cantidad de alumnos mayores de 16 años:", mayores)