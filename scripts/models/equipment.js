;(function(window) {

    function Equipment() {
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
        };
    }

    var brpg = window.brpg || {};
    brpg.models = brpg.models || {};
    brpg.models.Equipment = Equipment;
    window.brpg = brpg;
})(window);