;(function(window) {
    function UnequipItemAction(item) {
        this.equipmentController.removeItem(item);
        this.inventoryController.addItem(item);
        this.characterController.removeStatsFromItem(item);
        this.eventLogController.unequippedItem(item);
    }

    var brpg = window.brpg || {};
    brpg.actions = brpg.actions || {};
    brpg.actions.UnequipItemAction = UnequipItemAction;
    window.brpg = brpg;
})(window);