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
      expect(game.score).toEqual(0)
    });

    it('returns 20 after 20 times 1 rolls', function() {
      rollMany(20, 1)
      expect(game.score).toEqual(20)
    });
  });

  var rollMany = function(rolls, pins) {
    var i;
    for (i = 0; i < rolls; i++) {
      game.roll(pins);
    };
  }

});
