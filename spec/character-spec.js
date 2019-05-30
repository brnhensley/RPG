import { Character } from './../src/character.js';

describe('Character', function() {
  it('Should create a default Character', function() {
    let defaultCharacter = new Character()
    expect(defaultCharacter.name).toEqual('steve');
    expect(defaultCharacter.occupation).toEqual('pedo');
    expect(defaultCharacter.health).toEqual(100);
  });
});

describe('Character', function() {
  it('Should create Pauly', function() {
    let pauly = new Character({
      name: "Pauly",
      occupation: "Poopsmith",
      strength: 5,
      magic: 5,
      intelligence: 5,
      inventory: ['poop ingot', 'poop hammer', 'porcelain anvil' ]
    });
    expect(pauly.name).toEqual('Pauly');
    expect(pauly.occupation).toEqual('Poopsmith');
    expect(pauly.strength).toEqual(5);
    expect(pauly.magic).toEqual(5);
    expect(pauly.inventory).toEqual(['poop ingot', 'poop hammer', 'porcelain anvil']);
    expect(pauly.intelligence).toEqual(5);
  });
});

describe('Character', function() {
  it("Should add 1 to character's level", function() {
    let defaultCharacter = new Character({
      exp: 100
    });
    defaultCharacter.levelUp(defaultCharacter);
    expect(defaultCharacter.level).toEqual(2);
    expect(defaultCharacter.strength).toEqual(1);
    expect(defaultCharacter.magic).toEqual(1);
    expect(defaultCharacter.defence).toEqual(1);
  });
});

describe('Character', function() {
  it("defaultCharacter should gain experience and a level", function() {
    let defaultCharacter = new Character();
    let herbert = new Character({
      value: 100
    });
    defaultCharacter.kills(herbert);
    expect(defaultCharacter.level).toEqual(2);
  });
});

describe('Character', function() {
  it("Pauly should gain experience and a level", function() {
    let pauly = new Character({
      strength: 2,
      magic: 3,
      defence: 4,
      exp: 1,
      level: 40
    });
    let herbert = new Character({
      value: 4000
    });
    pauly.kills(herbert);
    expect(pauly.level).toEqual(41);
    expect(pauly.strength).toEqual(13);
    expect(pauly.magic).toEqual(14);
    expect(pauly.defence).toEqual(15);
  });
});

describe('Character', function() {
  it("pauly should gain experience based on level and reset exp", function() {
    let pauly = new Character({
      exp: 1,
      level: 40
    });
    let herbert = new Character({
      value: 100,
      level: 40
    });
    pauly.kills(herbert);
    expect(pauly.level).toEqual(41);
    expect(pauly.exp).toEqual(1);
  });
});

describe('Character', function() {
  it("have a level 1 character kill a level 40 character", function() {
    let pauly = new Character({
      level: 1,
      value: 10
    });
    let herbert = new Character({
      value: 100,
      level: 40
    });
    pauly.kills(herbert);
    expect(pauly.level).toEqual(9);
    expect(pauly.exp).toEqual(400);
  });
});

describe('Character', function() {
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
    console.log(herbert);
    pauly.battle(herbert);
    console.log(herbert);
    expect(pauly.health).toEqual(0);
  });
});

describe('Character', function() {
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
    pauly.battle(herbert);
    expect(herbert.health).toEqual(0);
  });
});
