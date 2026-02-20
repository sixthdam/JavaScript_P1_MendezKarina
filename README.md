# JavaScript_P1_MendezKarina 🐾

**Interactive Pokémon viewer using the [PokéAPI](https://pokeapi.co/) .** Navigate through Pokémon by number or name, see animated sprites, and never worry about broken images thanks to MissingNo as a fallback.

---

## Features ✨

- **Search by name or number:** Quickly find any Pokémon.
- **Prev / Next navigation:** Browse Pokémon sequentially.
- **Animated sprites:** Shows black/white animated sprites if available.
- **Clean fallback:** MissingNo image used when a Pokémon is not found.
- **Responsive layout:** Sprite is centered and the name/ID aligned neatly.
- **Capitalized names:** Handles Pokémon with hyphens (e.g., giratina-altered → Giratina-Altered).

---

## Technologies Used 💻
- **HTML5** – Page structure and interactive elements.
- **CSS3** – Styles and Pokédex layout.
- **JavaScript (ES6+)** – Fetching data from the PokéAPI, error handling, and dynamic updates.
- **PokéAPI** – Pokémon data source.
  
---
## How to Use 🚀

1. Clone or download the repo.
   ```
    https://github.com/sixthdam/JavaScript_P1_MendezKarina.git
   ```
2. Open `index.html` in your browser.
3. Type a Pokémon name or number in the search box and press Enter.
4. Use the **Prev** and **Next** buttons to navigate through Pokémon.
5. Enjoy the sprites and watch MissingNo appear if the Pokémon doesn't exist.

---

## Demo 🎬

<p align="center">
    <img src="https://media.discordapp.net/attachments/543965639887552523/1474194748183937024/video-pokedex.gif?ex=6998f659&is=6997a4d9&hm=0d74368a39b5182d927ef25aebf5e5ec867fd194e9604479c96b499e472edadb&=&width=657&height=837" alt="Demo" width="400">
</p>

---

## File Structure 📁

```
PRACTICA_ASYNC_MENDEZKARINA/
│
├── css/
│   └── style.css
├── images/
│   └── MissingNo.webp
├── js/
│   └── script.js
│ 
└── index.html

```

---

## Notes 📝

- The app uses **fetch** with a 1.5-second timeout for missing Pokémon, so you won't wait forever.
- Sprite size adjusts automatically.
- Names are capitalized automatically, even for hyphenated Pokémon names.

---

🤖 Author: [Karina Méndez](https://github.com/sixthdam)
