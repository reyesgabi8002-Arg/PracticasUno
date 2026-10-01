edad = int(input("Ingresa tu edad para verificar si puedes votar: "))
if edad >= 16:
    print("Con", edad, "años puedes votar próximamente.")
else:
    print("Todavía no puedes votar con", edad, "años.")