const API = "https://jsonplaceholder.typicode.com";

const lista = document.getElementById("lista");
const contenedorUsuarios = document.getElementById("usuarios");

// Información real de los jugadores. Los 10 usuarios de la API se muestran como jugadores.
const JUGADORES = [
  { nombre: "Lionel Messi", numero: 10, rol: "Delantero · Capitán", nacio: "Rosario, 1987", club: "Inter Miami", logro: "Campeón del Mundo 2022" },
  { nombre: "Emiliano Martínez", numero: 23, rol: "Arquero", nacio: "Mar del Plata, 1992", club: "Aston Villa", logro: "Guante de Oro Qatar 2022" },
  { nombre: "Cristian Romero", numero: 13, rol: "Defensor", nacio: "Córdoba, 1998", club: "Tottenham", logro: "Campeón del Mundo 2022" },
  { nombre: "Nicolás Otamendi", numero: 19, rol: "Defensor", nacio: "Buenos Aires, 1988", club: "Benfica", logro: "Campeón del Mundo 2022" },
  { nombre: "Nahuel Molina", numero: 26, rol: "Defensor", nacio: "Embalse (Córdoba), 1998", club: "Atlético de Madrid", logro: "Gol a Países Bajos en Qatar 2022" },
  { nombre: "Rodrigo De Paul", numero: 7, rol: "Mediocampista", nacio: "Sarandí (Buenos Aires), 1994", club: "Inter Miami", logro: "Campeón de la Copa América 2021 y 2024" },
  { nombre: "Enzo Fernández", numero: 24, rol: "Mediocampista", nacio: "San Martín (Buenos Aires), 2001", club: "Chelsea", logro: "Mejor jugador joven de Qatar 2022" },
  { nombre: "Alexis Mac Allister", numero: 20, rol: "Mediocampista", nacio: "Santa Rosa (La Pampa), 1998", club: "Liverpool", logro: "Gol a Polonia en Qatar 2022" },
  { nombre: "Julián Álvarez", numero: 9, rol: "Delantero", nacio: "Calchín (Córdoba), 2000", club: "Atlético de Madrid", logro: "4 goles en Qatar 2022" },
  { nombre: "Lautaro Martínez", numero: 22, rol: "Delantero", nacio: "Bahía Blanca, 1997", club: "Inter de Milán", logro: "Goleador de la Copa América 2024" },
];

// Novedades reales. Cada una reemplaza el texto de relleno de una de las primeras 10 publicaciones.
const NOTICIAS = [
  { titulo: "Campeón del Mundo y ocho veces Balón de Oro", texto: "Lionel Messi nació en Rosario en 1987. En Qatar 2022 fue elegido el mejor jugador del Mundial, hizo 7 goles y levantó la Copa. Ganó 8 Balones de Oro y es el máximo goleador histórico de la Selección." },
  { titulo: "El arquero que ganó el Guante de Oro", texto: "Emiliano Martínez, el Dibu, nació en Mar del Plata en 1992. En la final del Mundial 2022 le atajó un penal a Coman en la tanda y fue elegido el mejor arquero del torneo. Juega en el Aston Villa." },
  { titulo: "Un defensor del plantel campeón del mundo", texto: "Cristian Romero, el Cuti, nació en Córdoba en 1998. Integró el plantel campeón en Qatar 2022 y también ganó la Copa América 2021 y 2024. Juega en el Tottenham de Inglaterra." },
  { titulo: "El referente de la defensa", texto: "Nicolás Otamendi nació en Buenos Aires en 1988. Fue campeón del mundo en 2022 y de la Copa América 2021 y 2024. Jugó en Porto, Valencia, Manchester City y Benfica." },
  { titulo: "Gol en los cuartos de final del Mundial", texto: "Nahuel Molina nació en Embalse, Córdoba, en 1998. En Qatar 2022 hizo el primer gol de la Selección contra Países Bajos, en los cuartos de final. Juega en el Atlético de Madrid." },
  { titulo: "El motor del mediocampo", texto: "Rodrigo De Paul nació en Sarandí, Buenos Aires, en 1994. Es parte del equipo que ganó la Copa América 2021, el Mundial 2022 y la Copa América 2024. Jugó en Racing, Udinese y Atlético de Madrid." },
  { titulo: "Mejor jugador joven del Mundial", texto: "Enzo Fernández nació en San Martín, Buenos Aires, en 2001. En Qatar 2022 fue elegido el mejor jugador joven del torneo. En 2023 pasó de Benfica al Chelsea." },
  { titulo: "Un gol ante Polonia en Qatar 2022", texto: "Alexis Mac Allister nació en Santa Rosa, La Pampa, en 1998. En el Mundial 2022 le hizo un gol a Polonia y fue campeón con la Selección. Juega en el Liverpool." },
  { titulo: "Cuatro goles en el Mundial 2022", texto: "Julián Álvarez nació en Calchín, Córdoba, en 2000. Hizo 4 goles en Qatar 2022, dos de ellos en la semifinal contra Croacia. Empezó en River Plate y juega en el Atlético de Madrid." },
  { titulo: "Goleador de la Copa América 2024", texto: "Lautaro Martínez nació en Bahía Blanca en 1997. Con 5 goles fue el máximo goleador de la Copa América 2024 y marcó el gol del título en la final contra Colombia. Juega en el Inter de Milán." },
];

// Ejercicios 1 y 2: pedir GET /posts, mostrarlo en la consola y dibujar las primeras 10 tarjetas
async function cargarPublicaciones() {
  try {
    const respuesta = await fetch(`${API}/posts`);
    if (!respuesta.ok) {
      throw new Error("Error " + respuesta.status);
    }
    const datos = await respuesta.json();

    // Ejercicio 1: mostrar el resultado en la consola (F12)
    console.log(datos);

    // Ejercicio 2: mostrar las primeras 10 publicaciones, cada una en una tarjeta
    lista.innerHTML = "";
    datos.slice(0, 10).forEach((post, i) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");
      tarjeta.innerHTML = `
        <h3>${NOTICIAS[i].titulo}</h3>
        <p class="autor">${JUGADORES[i].nombre} · #${JUGADORES[i].numero}</p>
        <p>${NOTICIAS[i].texto}</p>`;
      lista.append(tarjeta);
    });
  } catch (error) {
    console.error(error);
    lista.innerHTML = '<p class="mensaje error">No se pudieron cargar las publicaciones. Revisá tu conexión y recargá la página.</p>';
  }
}

// Ejercicio 4: pedir GET /users y mostrar nombre, email y ciudad de cada uno
async function cargarUsuarios() {
  try {
    const respuesta = await fetch(`${API}/users`);
    if (!respuesta.ok) {
      throw new Error("Error " + respuesta.status);
    }
    const usuarios = await respuesta.json();

    contenedorUsuarios.innerHTML = "";
    usuarios.forEach((usuario, i) => {
      const jugador = JUGADORES[i];
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta", "usuario");
      tarjeta.innerHTML = `
        <div class="numero">${jugador.numero}</div>
        <div>
          <h3>${jugador.nombre}</h3>
          <p>${jugador.rol}</p>
          <ul>
            <li><b>Nació:</b> ${jugador.nacio}</li>
            <li><b>Club:</b> ${jugador.club}</li>
            <li><b>Logro:</b> ${jugador.logro}</li>
          </ul>
          <div class="datos-api">
            <strong>Datos de la API</strong>
            ${usuario.name} · ${usuario.email} · ${usuario.address.city}
          </div>
        </div>`;
      contenedorUsuarios.append(tarjeta);
    });
  } catch (error) {
    console.error(error);
    contenedorUsuarios.innerHTML = '<p class="mensaje error">No se pudieron cargar los usuarios. Revisá tu conexión y recargá la página.</p>';
  }
}

// Pregunta 3: probar GET /posts/500 y ver el código de respuesta en la consola
async function probarPostInexistente() {
  const respuesta = await fetch(`${API}/posts/500`);
  console.log("GET /posts/500 ->", respuesta.status);
}

cargarPublicaciones();
cargarUsuarios();
probarPostInexistente();

/*
PREGUNTAS CONCEPTUALES

1. En esta práctica, ¿quién cumple el rol de cliente y quién el de servidor?
R: El cliente es mi página web, que pide los datos. El servidor es JSONPlaceholder, que los guarda y responde.

2. ¿Qué método HTTP usaste para pedir las publicaciones? ¿Qué método usarías para crear una nueva?
R: Usé GET para pedir las publicaciones. Para crear una nueva usaría POST.

3. Si pedís GET /posts/500, ¿qué código de respuesta esperás recibir y por qué? Probalo.
R: Espero un 404 (Not Found), porque la API solo tiene 100 publicaciones y la número 500 no existe. Lo probé en la consola del navegador y devolvió 404.

4. ¿Qué es una API y para qué sirve JSONPlaceholder?
R: Una API es un conjunto de rutas que permiten pedir información a un servidor, por ejemplo GET /posts. JSONPlaceholder es una API gratis con datos de prueba para practicar.

5. ¿Por qué usamos JavaScript para mostrar los datos en la página y no Python?
R: Porque el navegador solo ejecuta JavaScript. Python corre en la computadora o el servidor y no puede crear HTML dentro de la página.

6. Cuando construyamos nuestra propia API con FastAPI, ¿qué tendríamos que cambiar en app.js para que la página la consuma en lugar de JSON Placeholder?
R: Cambiaría la dirección de la constante API por la de mi servidor (por ejemplo http://127.0.0.1:8000) y revisaría que las rutas y los nombres de los datos coincidan con los de mi API.
*/
