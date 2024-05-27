// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter");

const herakles = new Fighter("🧔 Heracles", 20, 6);
const lion = new Fighter("🦁 Nemean Lion", 11, 13);
let round = 1;

while (herakles.life > 0 && lion.life > 0) {
  console.log(`🕛 Round # ${round}:`);
  herakles.fight(lion);
  if (!lion.isAlive()) {
      console.log(`${lion.name} has been defeated! ${herakles.name} wins! 🏆`);
      break;
    } 
    lion.fight(herakles);
    if (!herakles.isAlive()) {
        console.log(`${herakles.name} has been defeated! ${lion.name} wins! 🏆`);
        break;
    }
    console.log(
        `${herakles.name} 🗡️ ${lion.name} 💙 ${lion.name} ${lion.life}`
    );
    console.log(
        `${lion.name} 🗡️ ${herakles.name} 💙 ${herakles.name} ${herakles.life}`
    );
    round++
};
