import findBy from '../app';

const arr = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

describe('Test findBy: ', () => {
  test.each([
    ['name test', ['name', 'маг'], [arr[0]]],
    ['type test', ['type', 'attack'], [arr[1]]],
  ])(
    ('-> %s'),
    (name, input, expectation) => {
      const finder = findBy(input[0], input[1]);
      const res = arr.filter(finder);

      expect(res).toEqual(expectation);
    },
  );
});

test('Typeof return:', () => {
  const fun = findBy();
  const res = typeof (fun);
  expect(res).toBe('function');
});
