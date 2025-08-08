// ===== Estado =====
const amigos = [];

// ===== Elementos =====
const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');   // <ul>
const resultado = document.getElementById('resultado'); // <ul>

// ===== Utilidades =====
function limpiarInput() {
  input.value = '';
  input.focus();
}

function actualizarLista() {
  lista.innerHTML = '';
  amigos.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function mostrarResultado(ganador) {
  resultado.innerHTML = ''; // limpiamos resultados previos
  const li = document.createElement('li');
  li.textContent = `🎉 El amigo secreto es: ${ganador}`;
  resultado.appendChild(li);
}

// ===== Acciones (usadas por tus botones con onclick) =====
function agregarAmigo() {
  const nombre = input.value.trim();

  if (!nombre) {
    // requisito: alertar si está vacío
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  // (Opcional) evita duplicados; quita este bloque si quieres permitirlos
  const repetido = amigos.some(n => n.toLowerCase() === nombre.toLowerCase());
  if (repetido) {
    alert('Ese nombre ya está en la lista.');
    limpiarInput();
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  limpiarInput();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Agrega al menos un nombre para sortear.');
    return;
  }
  const idx = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[idx];
  mostrarResultado(ganador);
}

// Permitir Enter para agregar
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarAmigo();
});
