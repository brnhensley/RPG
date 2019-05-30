export class Battle
{
  constructor(character, enemy)
  {
    this.character = character;
    this.enemy = enemy;
  }

  fight()
  {
    while (this.character.health > 0 && this.enemy.health > 0)
    {
      if (this.character.strength > this.enemy.defence)
      {
        this.enemy.health -= this.character.strength;

        if (this.enemy.health < 0) this.enemy.health = 0;
        if (this.enemy.health === 0)
        {
          this.character.kills(this.enemy);
          return this.character.name + " wins! " + this.enemy.name + " is DEAD!";
        }
      }
      if (this.enemy.strength > this.character.defence)
      {
        this.character.health -= this.enemy.strength;
        if (this.character.health < 0) this.character.health = 0;
        if(this.character.health === 0)
        {
          this.enemy.kills(this.character)
          return this.character.name + " are a fucking loser!";
        }
      }
    }
  }

}
