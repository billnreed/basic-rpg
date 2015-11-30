;
(function(window) {
    function Equipment() {
        var items = [];

        function addItem(item) {
            items.push(item);
        }

        function removeItem(itemToRemove) {
            items = items.map(function(item) {
                if (item.name !== itemToRemove.name) {
                    return item;
                }
            }).filter(function(item) {
                return item != null;
            });
        }

        function getItemsList() {
            return items;
        }

        return {
            addItem: addItem,
            removeItem: removeItem,
            getItemsList: getItemsList
        };
    }

    var brpg = window.brpg || {};
    brpg.models = brpg.models || {};
    brpg.models.Equipment = Equipment;
    window.brpg = brpg;
})(window);