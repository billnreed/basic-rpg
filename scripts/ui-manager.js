;(function(window) {
    function UIManager() {

        var $inventoryList = $('.js-inventory-list');

        function updateInventoryWith(inventoryList) {
            console.log('updating inventory with', inventoryList);
            $inventoryList.empty();

            inventoryList.forEach(function(item) {
                $('<li>')
                    .text(item)
                    .appendTo($inventoryList);
            });
        }

        return {
            updateInventoryWith: updateInventoryWith
        }
    }

    var brpg = window.brpg || {};
    brpg.UIManager = UIManager;
    window.brpg = brpg;
})(window);