;(function(window, Inventory, InventoryView) {

    function InventoryController() {
        var inventory = new Inventory();
        var view = new InventoryView();

        inventory.addItem('stick');
        inventory.addItem('pants');


        view.onEquip(function(item) {
            console.log('inventory item:', item);
        });

        view.renderWith(inventory.getItemsList());
    }

    var brpg = window.brpg || {};
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.InventoryController = InventoryController;
    window.brpg = brpg;

})(window, brpg.models.Inventory, brpg.views.InventoryView);