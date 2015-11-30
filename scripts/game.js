;(function(window, UserActions, InventoryController, EquipmentController) {
    var Game = function() {
        var userActions;
        var inventoryController, equipmentController;

        function start() {
            userActions = new UserActions();

            inventoryController = new InventoryController(userActions);
            equipmentController = new EquipmentController(userActions);

            userActions.setInventoryController(inventoryController);
            userActions.setEquipmentController(equipmentController);
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
})(window, brpg.UserActions, brpg.controllers.InventoryController, brpg.controllers.EquipmentController);