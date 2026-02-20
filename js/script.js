const imgEl = document.querySelector('#pokemon-img');
const nameEl = document.querySelector('#pokemon-name');
const input = document.querySelector('#search');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');

let currentPokemon = 474;

function capitalizarNombre(name) {
  return name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('-');
}

async function obtenerPokemon(idOrName) {
    nameEl.textContent = 'Loading...';
    imgEl.src = '';
    imgEl.alt = '';
    imgEl.style.width = '0';
    imgEl.style.height = '0';

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1500);

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`, { signal: controller.signal });
        clearTimeout(timeout);

        if (!res.ok) throw new Error('#??? - ERROR. Not Found');

        const data = await res.json();
        currentPokemon = data.id;

        const nombreCapitalizado = capitalizarNombre(data.name);
        nameEl.innerHTML = `${data.id} - <span>${nombreCapitalizado}</span>`;

        const animated = data.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default;
        imgEl.src = animated || data.sprites.front_default || '../images/missingno.webp';
        imgEl.alt = data.name || 'MissingNo';

        if (imgEl.src.includes('missingno.webp')) {
        imgEl.style.width = '64px';
        imgEl.style.height = '64px';
        } else {
        imgEl.style.width = '';
        imgEl.style.height = '';
        }

    } catch (error) {
        clearTimeout(timeout);

        nameEl.textContent = '#??? - ERROR. Not Found';
        imgEl.src = '../images/missingno.webp';
        imgEl.alt = 'MissingNo';
        imgEl.style.width = '64px';
        imgEl.style.height = '64px';
        console.error(error);
    }
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const value = input.value.trim().toLowerCase();
        if (value !== '') {
        obtenerPokemon(value);
        input.value = '';
        }
    }
});

btnPrev.addEventListener('click', () => {
    if (currentPokemon > 1) {
        currentPokemon--;
        obtenerPokemon(currentPokemon);
    }
});

btnNext.addEventListener('click', () => {
    currentPokemon++;
    obtenerPokemon(currentPokemon);
});

obtenerPokemon(currentPokemon);
