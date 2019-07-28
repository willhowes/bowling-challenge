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
      var i;
      for (i = 0; i < 20; i++) {
        game.roll(0);
      };
      expect(game.score).toEqual(0)
    });

    it('returns 20 after 20 times 1 rolls', function() {
      var i;
      for (i = 0; i < 20; i++) {
        game.roll(1);
      };
      expect(game.score).toEqual(20)
    });
  });

});
