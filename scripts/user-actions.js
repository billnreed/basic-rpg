;(function(window) {
    function UserActions() {
        var inventoryController, equipmentController, characterController;

        function equipItem(item) {
            inventoryController.removeItem(item);
            equipmentController.addItem(item);
        }

        function unequipItem(item) {
            equipmentController.removeItem(item);
            inventoryController.addItem(item);
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

        return {
            equipItem: equipItem,
            unequipItem: unequipItem,
            setInventoryController: setInventoryController,
            setEquipmentController: setEquipmentController,
            setCharacterController: setCharacterController
        }
    }

    var brpg = window.brpg || {};
    brpg.UserActions = UserActions;
    window.brpg = brpg;
})(window);