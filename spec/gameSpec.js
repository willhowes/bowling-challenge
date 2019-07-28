'use strict';

describe ('game', function(){

  var game;
  beforeEach (function(){
    game = new Game;
  });

  it('is is an instance of game constructor function', function(){
      expect(game).toEqual(jasmine.any(Game));
  });

  describe('.score', function(){
    it('returns 0 after 20 times 0 rolls', function() {
      rollMany(20, 0)
      expect(game.score()).toEqual(0)
    });

    it('returns 20 after 20 times 1 rolls', function() {
      rollMany(20, 1)
      expect(game.score()).toEqual(20)
    });
  });

    it('returns score of 16 after a 5,5,3 and 17x0s', function() {
      rollSpare();
      game.roll(3)
      rollMany(17,0)
      expect(game.score()).toEqual(16)
    })

    it('returns score of 24 after 10,3,4 and 16x0s', function(){
      rollStrike();
      game.roll(3)
      game.roll(4)
      rollMany(16,0)
      expect(game.score()).toEqual(24)
    })

    it('returns 300 if all strikes', function() {
      rollMany(12,10)
      expect(game.score()).toEqual(300)
    })

    it('returns 20 with game of all 0s and a spare and strike in frame 10', function() {
      rollMany(18,0)
      game.roll(5)
      game.roll(5)
      game.roll(10)
      expect(game.score()).toEqual(20)

    })

  var rollMany = function(rolls, pins) {
    var i;
    for (i = 0; i < rolls; i++) {
      game.roll(pins);
    };
  }

  var rollSpare = function() {
    game.roll(5);
    game.roll(5);
  };

  var rollStrike = function() {
    game.roll(10);
  }

});
