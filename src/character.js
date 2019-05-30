export class Character
{
  constructor(stats)
  {
    this.name = 'steve';
    this.occupation = 'pedo';
    this.health = 100;
    this.strength = 0;
    this.magic = 0;
    this.intelligence = 0;
    this.defence = 0;
    this.magicResistance = 0;
    this.dex = 0;
    this.inventory = [];
    this.level = 1;
    this.exp = 0;
    this.value = 0;
    Object.assign(this, stats);
  }

  levelUp(enemy)
  {
    while(this.exp >= (100 * this.level))
    {
      this.exp -= (100 * this.level);
      this.level += 1;
      this.strength += parseInt((this.level/4) + 1);
      this.magic += parseInt((this.level/4) + 1);
      this.defence += parseInt((this.level/4) + 1);
    }
  }

  // enemyLevelUp(enemy)
  // {
  //   while(enemy.exp >= (100 * enemy.level))
  //   {
  //     enemy.exp -= (100 * enemy.level);
  //     enemy.level += 1;
  //     enemy.strength += parseInt((enemy.level/4) + 1);
  //     enemy.magic += parseInt((enemy.level/4) + 1);
  //     enemy.defence += parseInt((enemy.level/4) + 1);
  //   }
  // }

  kills(enemy)
  {
    this.exp += (enemy.value * enemy.level);
    this.levelUp(enemy);
    return this.exp;
  }
  // enemyKills(enemy)
  // {
  //   enemy.exp += (this.value * this.level);
  //   enemy.enemyLevelUp(enemy);
  //   return enemy.exp;
  // }

  battle(enemy)
  {
    while (this.health > 0 && enemy.health > 0)
    {
      if (this.strength > enemy.defence)
      {
        enemy.health -= this.strength;

        if (enemy.health < 0) enemy.health = 0;
        if (enemy.health === 0)
        {
          this.kills(enemy);
          return this.name + " wins! " + enemy.name + " is DEAD!";
        }
      }
      if (enemy.strength > this.defence)
      {
        this.health -= enemy.strength;
        if (this.health < 0) this.health = 0;
        if(this.health === 0)
        {
          // enemy.kills(enemy)
          return this.name + " are a fucking loser!";
        }
      }
    }
  }

}

let pauly = new Character({
  name: "Pauly",
  occupation: "Poopsmith",
  strength: 5,
  magic: 5,
  intelligence: 5,
  value: 200,
  inventory: ['poop ingot', 'poop hammer', 'porcelain anvil' ]
});

let swampthang = new Character({
  name: "Swampthang",
  occupation: "Druid",
  strength: 40,
  magic: 40,
  value: 200,
  intelligence: 10,
  inventory: ['bong', 'grinder']
});

let criminal = new Character ({
  name: "Criminal",
  occupation: "Thief",
  strength: 10,
  magic: 10,
  defence: 5,
  value: 5,
  intelligence: 1,
  inventory: ['potion', 'creepy pictures', 'chains']
});

let buttholeSpider = new Character ({
  // spawn in groups of 10
  // they have no defence against buttplugs
  name: 'Butthole Spider',
  occupation: 'critter of the night',
  strength: 2,
  health: 10,
  dex: 40,
  value: 2,
  magicResistance: 50,
  inventory: ['lockpick']
});

let herbert = new Character ({
  name: 'Herbert The Pervert',
  occupation: 'perv',
  strength: 50,
  health: 1000,
  magic: 50,
  defence: 50,
  magicResistance: 50,
  dex: 10,
  value: 100,
});
