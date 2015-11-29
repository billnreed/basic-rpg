;(function(window) {
    function InventoryViewRenderer() {

        var $inventoryList = $('.js-inventory-list');

        function updateInventoryWith(inventoryList) {
            $inventoryList.empty();

            inventoryList.forEach(function(item) {
                var $inventoryItemName =
                    $('<span>')
                        .addClass('inventory-item__name')
                        .text(item);

                var $inventoryItemActions =
                    $('<span>')
                        .addClass('inventory-item__action js-equip-item')
                        .text('equip');

                $('<li>')
                    .addClass('inventory-item')
                    .append($inventoryItemName)
                    .append($inventoryItemActions)
                    .appendTo($inventoryList);
            });
        }

        return {
            updateInventoryWith: updateInventoryWith
        }
    }

    var brpg = window.brpg || {};
    brpg.viewRenderers = brpg.viewRenderers || {};
    brpg.viewRenderers.InventoryViewRenderer = InventoryViewRenderer;
    window.brpg = brpg;
})(window);