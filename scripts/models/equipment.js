;
(function(window) {
    function Equipment() {
        var items = [];

        function addItem(item) {
            items.push(item);
        }

        function removeItem(item) {
            var itemIndex = items.indexOf(item);
            items.splice(itemIndex, 1);
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