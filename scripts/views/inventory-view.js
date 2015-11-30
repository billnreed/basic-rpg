;
(function(window) {
    function InventoryView() {
        var $inventoryList = $('.js-inventory-list');
        var onEquipCallback;

        function renderWith(inventoryList) {
            $inventoryList.empty();

            inventoryList.forEach(function(item) {
                var $inventoryItemName =
                    $('<span>')
                        .addClass('inventory-item__name')
                        .text(item);

                var $inventoryItemEquipAction =
                    $('<span>')
                        .addClass('inventory-item__action js-equip-item')
                        .text('equip')
                        .click(function() {
                                   onEquipCallback(item);
                               });

                $('<li>')
                    .addClass('inventory-item')
                    .append($inventoryItemName)
                    .append($inventoryItemEquipAction)
                    .appendTo($inventoryList);
            });
        }

        function onEquip(fn) {
            onEquipCallback = fn;
        }

        return {
            renderWith: renderWith,
            onEquip: onEquip
        }
    }

    var brpg = window.brpg || {};
    brpg.views = brpg.views || {};
    brpg.views.InventoryView = InventoryView;
    window.brpg = brpg;
})(window);