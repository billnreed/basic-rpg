;(function(window, Inventory, InventoryView) {

    function InventoryController(_userActions_) {
        var userActions = _userActions_;
        var inventory = new Inventory();
        var view = new InventoryView();

        inventory.addItem('stick');
        inventory.addItem('pants');


        view.onEquip(function(item) {
            userActions.equipItem(item);
        });

        view.renderWith(inventory.getItemsList());

        function removeItem(item) {
            inventory.removeItem(item);
            view.renderWith(inventory.getItemsList());
        }

        return {
            removeItem: removeItem
        }
    }

    var brpg = window.brpg || {};
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.InventoryController = InventoryController;
    window.brpg = brpg;

})(window, brpg.models.Inventory, brpg.views.InventoryView);