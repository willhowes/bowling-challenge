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
  var frameIndex = 0;
  var frame;
  for (frame = 0; frame < 10; frame++) {
    if (this._rolls[frameIndex] === 10) {
      this._score += 10 + this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
      frameIndex += 1;
    }
    else if (this.isSpare(frameIndex)) {
      this._score += 10 + this._rolls[frameIndex + 2]
      frameIndex += 2;
    } else {
      this._score += this._rolls[frameIndex] + this._rolls[frameIndex +1];
      frameIndex += 2;
    }
  };
  return this._score
};

Game.prototype.isSpare = function (frameIndex) {
  return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;

};
