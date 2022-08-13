const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//one
const [player1, player2] = game.players;
// console.log(player1, player2);
//two

const [gk1, ...others1] = player1;
const [gk2, ...others2] = player2;
// console.log(gk1, others1);
// console.log(gk2, others2);

//three
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
//four
const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);
//five
const { team1 } = game.odds;
const { x: draw } = game.odds;
const { team2 } = game.odds;
console.log(team1, draw, team2);

//six
const printGoals = (...players) => {
  console.log("scored:", players.length);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");

//seven
team1 < team2 && console.log("team one is mostly like to win");
team2 < team1 && console.log("team two is mostly like to win");
