// console.log(data);

let cardsSection = document.querySelector(".cards");

function createCard(pokemon) {
  let cardLi = document.createElement("li");
  cardLi.className = "card";

  let cardTitle = document.createElement("h2");
  cardTitle.className = "card--title";
  cardTitle.textContent = pokemon.name.toUpperCase();

  let cardImg = document.createElement("img");
  cardImg.width = 256;
  cardImg.className = "card--img";
  cardImg.src = pokemon.sprites.other["official-artwork"].front_default;

  let cardStats = document.createElement("ul");
  cardStats.className = "card--text";

  for (let stats in pokemon.stats) {
    let cardStat = document.createElement("li");
    cardStat.textContent = `${pokemon.stats[stats].stat.name.toUpperCase()}: ${
      pokemon.stats[stats].base_stat
    }`;
    cardStats.appendChild(cardStat);
  }

  // let cardHp = document.createElement("li");
  // cardHp.textContent = `${pokemon.stats[0].stat.name.toUpperCase()}: ${
  //   pokemon.stats[0].base_stat
  // }`;

  // let cardAttack = document.createElement("li");
  // cardAttack.textContent = `${pokemon.stats[1].stat.name.toUpperCase()}: ${
  //   pokemon.stats[1].base_stat
  // }`;

  // let cardDefense = document.createElement("li");
  // cardDefense.textContent = `${pokemon.stats[2].stat.name.toUpperCase()}: ${
  //   pokemon.stats[2].base_stat
  // }`;

  // let cardSpecialAttack = document.createElement("li");
  // cardSpecialAttack.textContent = `${pokemon.stats[3].stat.name.toUpperCase()}: ${
  //   pokemon.stats[3].base_stat
  // }`;

  // let cardSpecialDefense = document.createElement("li");
  // cardSpecialDefense.textContent = `${pokemon.stats[4].stat.name.toUpperCase()}: ${
  //   pokemon.stats[4].base_stat
  // }`;

  // let cardSpeed = document.createElement("li");
  // cardSpeed.textContent = `${pokemon.stats[5].stat.name.toUpperCase()}: ${
  //   pokemon.stats[5].base_stat
  // }`;

  // cardStats.append(
  //   cardHp,
  //   cardAttack,
  //   cardDefense,
  //   cardSpecialAttack,
  //   cardSpecialDefense,
  //   cardSpeed
  // );
  cardLi.append(cardTitle, cardImg, cardStats);
  cardsSection.appendChild(cardLi);
}

for (let pokemon of data) {
  createCard(pokemon);
}
