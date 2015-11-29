;(function() {
    function InventoryViewResponder() {
        var $inventoryList = $('.js-inventory-list');
        var equipItemSelector = '.js-equip-item';

        $inventoryList.on('click', equipItemSelector, function() {

        });
    }

    var brpg = window.brpg || {};
    brpg.viewResponders = brpg.viewResponders || {};
    brpg.viewResponders.InventoryViewResponder = InventoryViewResponder;
    window.brpg = brpg;
})(window);