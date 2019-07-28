'use strict';

function Game() {

  this._score = 0;
  this._rolls = [];
  this.currentRoll = 0;

};


Game.prototype.roll = function (pins) {
  this._rolls.push(pins)
  // this._rolls[this._currentRoll++] = pins;
  console.log(this._rolls)
};
Game.prototype.score = function () {
  var i = 0;
  var frame;
  for (frame = 0; frame < 10; frame++) {
    if (this._rolls[i] + this._rolls[i + 1] === 10) {
      this._score += 10 + this._rolls[i + 2]
      i += 2;
    } else {
      this._score += this._rolls[i] + this._rolls[i +1];
      i += 2;
    }
  };
  return this._score
};
