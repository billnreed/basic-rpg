;(function(window) {
    function ActionExecutor() {
        var inventoryController, equipmentController, characterController, eventLogController;

        function executeAction(action, actionArguments) {
            action.apply({
                inventoryController: inventoryController,
                equipmentController: equipmentController,
                characterController: characterController,
                eventLogController: eventLogController
            }, actionArguments);
        }

        function setInventoryController(_inventoryController_) {
            inventoryController = _inventoryController_;
        }

        function setEquipmentController(_equipmentController_) {
            equipmentController = _equipmentController_;
        }

        function setCharacterController(_characterController_) {
            characterController = _characterController_;
        }

        function setEventLogController(_eventLogController_) {
            eventLogController = _eventLogController_;
        }

        return {
            executeAction: executeAction,
            setInventoryController: setInventoryController,
            setEquipmentController: setEquipmentController,
            setCharacterController: setCharacterController,
            setEventLogController: setEventLogController
        }
    }

    var brpg = window.brpg || {};
    brpg.ActionExecutor = ActionExecutor;
    window.brpg = brpg;
})(window);