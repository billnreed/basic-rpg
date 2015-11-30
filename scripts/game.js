;(function(window, UserActions, InventoryController, EquipmentController, CharacterController, EventLogController) {
    var Game = function() {
        var userActions;
        var inventoryController, equipmentController, characterController, eventLogController;

        function start() {
            userActions = new UserActions();

            inventoryController = new InventoryController(userActions);
            equipmentController = new EquipmentController(userActions);
            characterController = new CharacterController();
            eventLogController = new EventLogController();

            userActions.setInventoryController(inventoryController);
            userActions.setEquipmentController(equipmentController);
            userActions.setCharacterController(characterController);
            userActions.setEventLogController(eventLogController);
        }

        return {
            start: start
        }
    };

    var brpg = window.brpg || {};
    brpg.Game = Game;
    window.brpg = brpg;
})(window, brpg.UserActions, brpg.controllers.InventoryController, brpg.controllers.EquipmentController, brpg.controllers.CharacterController, brpg.controllers.EventLogController);