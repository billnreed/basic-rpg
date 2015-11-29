;(function(window) {
    function Inventory() {
        var items = [];

        function addItem(item) {
            items.push(item);
        }

        function getItemsList() {
            return items;
        }

        return {
            addItem: addItem,
            getItemsList: getItemsList
        }
    }

    var brpg = window.brpg || {};
    brpg.models = brpg.models || {};
    brpg.models.Inventory = Inventory;
    window.brpg = brpg;
})(window);