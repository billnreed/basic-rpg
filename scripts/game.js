;(function(window, UserActions, InventoryController, EquipmentController, CharacterController) {
    var Game = function() {
        var userActions;
        var inventoryController, equipmentController, characterController;

        function start() {
            userActions = new UserActions();

            inventoryController = new InventoryController(userActions);
            equipmentController = new EquipmentController(userActions);
            characterController = new CharacterController();

            userActions.setInventoryController(inventoryController);
            userActions.setEquipmentController(equipmentController);
            userActions.setCharacterController(characterController);
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
})(window, brpg.UserActions, brpg.controllers.InventoryController, brpg.controllers.EquipmentController, brpg.controllers.CharacterController);