;(function(Game, UIManager) {
    var uiManager = new UIManager();
    var game = new Game(uiManager);
    game.start();
})(window.brpg.Game, window.brpg.UIManager);