'use strict';

function Game() {

  this._score = 0;
  this._rolls = [];
  this.currentRoll = 0;

};

Game.prototype.roll = function (pins) {
  this._rolls.push(pins)
};
Game.prototype.score = function () {
  var frameIndex = 0;
  var frame;
  for (frame = 0; frame < 10; frame++) {
    if (this.isStrike(frameIndex)) {
      this._score += 10 + this.strikeBonus(frameIndex);
      frameIndex += 1;
    }
    else if (this.isSpare(frameIndex)) {
      this._score += 10 + this.spareBonus(frameIndex);
      frameIndex += 2;
    } else {
      this._score += this.sumOfFrame(frameIndex);
      frameIndex += 2;
    }
  };
  return this._score
};

Game.prototype.isSpare = function (frameIndex) {
  return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
};

Game.prototype.isStrike = function (frameIndex) {
  return this._rolls[frameIndex] === 10;
};

Game.prototype.sumOfFrame = function (frameIndex) {
  return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
};

Game.prototype.spareBonus = function (frameIndex) {
  return this._rolls[frameIndex + 2];
};

Game.prototype.strikeBonus = function (frameIndex) {
  return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2]
};
