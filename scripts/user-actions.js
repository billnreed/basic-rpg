;(function(window) {
    function UserActions() {
        var inventoryController, equipmentController;

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

        return {
            equipItem: equipItem,
            unequipItem: unequipItem,
            setInventoryController: setInventoryController,
            setEquipmentController: setEquipmentController
        }
    }

    var brpg = window.brpg || {};
    brpg.UserActions = UserActions;
    window.brpg = brpg;
})(window);