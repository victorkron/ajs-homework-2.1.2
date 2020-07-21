// TODO: write your code here

export default function findBy(name, str) {
  return function (item) {
    return item[name] === str;
  };
}


const finder = findBy('name', 'урон');
const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
].filter(finder);

console.log(results);
