import requests
import json

respuesta = requests.get("https://jsonplaceholder.typicode.com/users")
usuarios = respuesta.json()

print(usuarios[0]["name"])  # Leanne Graham

# 1. Ver el JSON
print(json.dumps(usuarios, indent=2))

# 2. Contar
print("Cantidad de usuarios:", len(usuarios))

# 3. Listar
for usuario in usuarios:
    print(f'{usuario["id"]}. {usuario["name"]} - {usuario["email"]} - {usuario["address"]["city"]}')

# 4. Elegir un usuario
numero = input("Número de usuario (1-10): ")
r_posts = requests.get(f"https://jsonplaceholder.typicode.com/posts?userId={numero}")
posts = r_posts.json()
for post in posts:
    print("-", post["title"])

# 5. Errores
r_error = requests.get("https://jsonplaceholder.typicode.com/usuarioss")
print("Código:", r_error.status_code)  # 404
if r_error.status_code == 200:
    print("Todo salió bien")
elif r_error.status_code == 404:
    print("No se encontró")

# Extra: comentarios del post 1
r_comentarios = requests.get("https://jsonplaceholder.typicode.com/posts/1/comments")
for c in r_comentarios.json():
    print("-", c["name"], "|", c["email"])

# Preguntas
# 1. respuesta.json() devuelve una lista de diccionarios (en /users). Si pedís un solo usuario (/users/1), devuelve un diccionario.
# 2. 200 significa que todo salió bien. 404 significa que no se encontró lo que pediste.