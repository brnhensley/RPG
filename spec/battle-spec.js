import { Character } from './../src/character.js';
import { Battle } from './../src/battle.js';

describe('Battle', function() {
  it("will battle pauly will die", function() {
    let pauly = new Character({
      level: 1
    });
    let herbert = new Character({
      value: 100,
      level: 40,
      strength: 10,
      defence: 10
    });
    let testBattle = new Battle(pauly, herbert)
    testBattle.fight();
    expect(pauly.health).toEqual(0);
  });
});

describe('Battle', function() {
  it("will battle herbert will die", function() {
    let pauly = new Character({
      level: 1,
      exp: 500000
    });
    pauly.levelUp(pauly)
    let herbert = new Character({
      value: 100,
      level: 40,
      strength: 10,
      defence: 10
    });
    let testBattle = new Battle(pauly, herbert)
    testBattle.fight();
    expect(herbert.health).toEqual(0);
  });
});
