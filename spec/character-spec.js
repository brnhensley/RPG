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
    expect(pauly.inventory).toEqual(['poop ingot', 'poop hammer']);
    expect(pauly.intelligence).toEqual(5);
  });
});
