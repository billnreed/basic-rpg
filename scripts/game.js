;
(function(window,
          ActionExecutor,
          InventoryController, EquipmentController, CharacterController, EventLogController, RoomController,
          GoToNextRoomAction) {
    var Game = function() {
        var actionExecutor;
        var inventoryController, equipmentController, characterController, eventLogController, roomController;

        function start() {
            actionExecutor = new ActionExecutor();

            inventoryController = new InventoryController(actionExecutor);
            equipmentController = new EquipmentController(actionExecutor);
            characterController = new CharacterController();
            eventLogController = new EventLogController();
            roomController = new RoomController(actionExecutor);

            actionExecutor.setInventoryController(inventoryController);
            actionExecutor.setEquipmentController(equipmentController);
            actionExecutor.setCharacterController(characterController);
            actionExecutor.setEventLogController(eventLogController);
            actionExecutor.setRoomController(roomController);

            actionExecutor.executeAction(GoToNextRoomAction);
        }

        return {
            start: start
        }
    };

    var brpg = window.brpg || {};
    brpg.Game = Game;
    window.brpg = brpg;
})(window, brpg.ActionExecutor,
   brpg.controllers.InventoryController, brpg.controllers.EquipmentController, brpg.controllers.CharacterController,
   brpg.controllers.EventLogController, brpg.controllers.RoomController, brpg.actions.GoToNextRoomAction);