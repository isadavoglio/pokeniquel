function getStringifiedNumber(number) {
  if (number < 10) {
    return "00" + number;
  } else if (number < 100) {
    return "0" + number;
  } else {
    return "" + number;
  }
}

function generateRandomPokeId() {
  return Math.floor(Math.random() * 151);
}

["first", "second", "third"].forEach((nth) => {
  const pokemon = document.querySelector(`.${nth}-poke`);

  const pokeImg = document.createElement("img");
  pokeImg.setAttribute("class", "poke-img");
  pokeImg.setAttribute(
    "src",
    `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getStringifiedNumber(
      generateRandomPokeId()
    )}.png`
  );

  pokemon.appendChild(pokeImg);
});
