import { Magician, Daemon } from './classes';

test('Without stoned', () => {
  const expected = [100, 90, 80, 70, 60];
  const magician = new Magician('Hero');
  const received = magician.attack;
  expect(received).toEqual(expected);
});

test('With stoned', () => {
  const expected = [100, 85, 72, 60, 48];
  const daemon = new Daemon('Hero');
  daemon.stoned = true;
  const received = daemon.attack;
  expect(received).toEqual(expected);
});
