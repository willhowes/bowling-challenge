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

    it('returns score of 16 after a 5,5,3 and 17 0s game', function() {
      game.roll(5)
      game.roll(5)
      game.roll(3)
      rollMany(17,0)
      expect(game.score()).toEqual(16)
    })

  var rollMany = function(rolls, pins) {
    var i;
    for (i = 0; i < rolls; i++) {
      game.roll(pins);
    };
  }

});
