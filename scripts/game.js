;(function(window, Inventory) {
    var Game = function(_uiManager_) {
        var uiManager = _uiManager_;
        var inventory, equippedItems;

        function start() {
            //make inventory
            inventory = new Inventory();
            inventory.addItem('stick');
            inventory.addItem('pants');
            uiManager.updateInventoryWith(inventory.getItemsList());

            //make equipped items
            //make event log
            //make actions
        }

        return {
            start: start
        }
    };

    var brpg = window.brpg || {};
    brpg.Game = Game;
    window.brpg = brpg;
})(window, window.brpg.Inventory);