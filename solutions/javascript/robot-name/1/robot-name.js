function randomLetter () {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function Robot() {
  'use strict';

  this._name = this.generateName();
}

Robot.usedNames = {};

Robot.prototype = {
  constructor: Robot,
  generateName: function () {
    var name = randomLetter();
    name += randomLetter();
    name += (Math.random() + '').substr(2, 3);

    if (this.constructor.usedNames[name]) {
      return this.generateName();
    }

    this.constructor.usedNames[name] = true;

    return name;
  },
  get name () { return this._name; },

  set name (newName) {
    if (!(/^[A-Z]{2}\d{3}$/).test(newName)) {
      throw new Error('Name must be 2 capital letters followed by 3 ints.');
    }

    this._name = newName;
  },

  reset: function() { this.name = this.generateName(); }
};
module.exports = Robot