;(function(window, Equipment, EquipmentView) {
    function EquipmentController(userActions) {
        var equipment = new Equipment();
        var view = new EquipmentView();

        view.onUnequip(function(item) {
            userActions.unequipItem(item);
        });

        function addItem(item) {
            equipment.addItem(item);
            view.renderWith(equipment.getItemsList());
        }

        function removeItem(item) {
            equipment.removeItem(item);
            view.renderWith(equipment.getItemsList());
        }

        return {
            addItem: addItem,
            removeItem: removeItem
        };
    }

    var brpg = window.brpg;
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.EquipmentController = EquipmentController;
    window.brpg = brpg;

})(window, brpg.models.Equipment, brpg.views.EquipmentView);