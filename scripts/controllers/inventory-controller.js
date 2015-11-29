;(function(window, Inventory, InventoryViewRenderer, InventoryViewResponder) {

    function InventoryController() {
        var inventory = new Inventory();
        var viewRenderer = new InventoryViewRenderer();
        var viewResponder = new InventoryViewResponder();

        inventory.addItem('stick');
        inventory.addItem('pants');

        viewRenderer.updateInventoryWith(inventory.getItemsList());
    }

    var brpg = window.brpg || {};
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.InventoryController = InventoryController;
    window.brpg = brpg;

})(window, brpg.models.Inventory, brpg.viewRenderers.InventoryViewRenderer, brpg.viewResponders.InventoryViewResponder);