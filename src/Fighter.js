/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, life) {
    this.name = name;

    this.strength = strength;

    this.dexterity = dexterity;

    this.life = MAX_LIFE;
  }
  fight(opponent) {
    let attack =
      Math.floor(Math.random() * this.strength) + 1 - opponent.dexterity;
    if (attack > 0) {
      opponent.life -= attack;
      if (opponent.life < 0) {
        opponent.life = 0;
      }
    }
  }
  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
