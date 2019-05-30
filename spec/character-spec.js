import { Character } from './../src/character.js';

describe('Character', function() {
  it('Should create a default Character', function() {
    let defaultCharacter = new Character()
    expect(defaultCharacter.name).toEqual('steve');
    expect(defaultCharacter.occupation).toEqual('pedo');
    expect(defaultCharacter.health).toEqual(100);
  });
});
