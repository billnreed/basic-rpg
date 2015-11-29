;(function(window, InventoryController, Equipment) {
    var Game = function() {
        var inventoryController, equipment;

        function start() {
            inventoryController = new InventoryController();


            //make equipped items



            //make event log
            //make actions
        }

        return {
            start: start
        }
    };

    var brpg = window.brpg || {};
    brpg.Game = Game;
    window.brpg = brpg;
})(window, window.brpg.controllers.InventoryController, window.brpg.models.Equipment);