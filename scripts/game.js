;(function(window, InventoryController, EquipmentController) {
    var Game = function() {
        var inventoryController, equipmentController;

        function start() {
            inventoryController = new InventoryController();
            equipmentController = new EquipmentController();


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
})(window, window.brpg.controllers.InventoryController, window.brpg.controllers.EquipmentController);