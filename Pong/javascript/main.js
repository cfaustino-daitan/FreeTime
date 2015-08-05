(function () {
    window.game = new PongGame(800,800);
    var cfg = {
        width: 800,
        height: 800,
        fps: 40
    },
    gameMachine = new GameMachine( game, cfg, '.gameStage' );

    game.init();
    gameMachine.start();

   
})();