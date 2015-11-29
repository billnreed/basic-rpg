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
    brpg.Inventory = Inventory;
    window.brpg = brpg;
})(window);