const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);
//one
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log([events]);

//two
gameEvents.delete(64);
console.log(gameEvents);

//three
const time = [...gameEvents.keys()].pop();
console.log(`"An event happened, on
average, every ${time / gameEvents.size} minutes`);
//four
// [FIRST HALF] 17: ⚽ GOAL
for (const [min, event] of gameEvents) {
  const half = min < 45 ? "FIRST" : "SECOND";
  console.log(`${half} HALF ${min}: ${event}`);
}
