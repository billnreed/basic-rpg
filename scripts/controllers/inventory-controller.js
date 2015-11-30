;
(function(window, Inventory, InventoryView) {

    function InventoryController(_userActions_) {
        var userActions = _userActions_;
        var inventory = new Inventory();
        var view = new InventoryView();

        inventory.addItem({
            name: 'stick',
            strength: 1,
            defense: 0
        });
        inventory.addItem({
            name: 'pants',
            strength: 0,
            defense: 1
        });

        view.onEquip(function(item) {
            userActions.equipItem(item);
        });

        view.renderWith(inventory.getItemsList());

        function addItem(item) {
            inventory.addItem(item);
            view.renderWith(inventory.getItemsList());
        }

        function removeItem(item) {
            inventory.removeItem(item);
            view.renderWith(inventory.getItemsList());
        }

        return {
            addItem: addItem,
            removeItem: removeItem
        }
    }

    var brpg = window.brpg || {};
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.InventoryController = InventoryController;
    window.brpg = brpg;

})(window, brpg.models.Inventory, brpg.views.InventoryView);