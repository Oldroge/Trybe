const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength + 15) + 1);

const warriorDamage = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg) + 1);

const mageDamage = () => {
  let mageMana = 200;
  const maxDmg = Math.floor(Math.random() * (mage.intelligence * 2) + 1);
  console.log(maxDmg);
  const turnStats = {
    mana: 0,
    warning: 'Não tenho mais mana...',
  }
  if (maxDmg > 0) {
    return mageMana -= 15;
  } else {
    return turnStats.warning;
  }
};

console.log(mageDamage());
