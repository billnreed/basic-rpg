;
(function(window) {

    var EquipItemAction = function(item) {
        this.inventoryController.removeItem(item);
        this.equipmentController.addItem(item);
        this.characterController.addStatsFromItem(item);
        this.eventLogController.equippedItem(item);
    };

    var brpg = window.brpg || {};
    brpg.actions = brpg.actions || {};
    brpg.actions.EquipItemAction = EquipItemAction;
    window.brpg = brpg;
})(window);