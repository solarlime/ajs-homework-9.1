// eslint-disable-next-line max-classes-per-file
import Character from './app';

class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}

export { Magician, Daemon };
