;(function(window, Equipment, EquipmentView) {
    function EquipmentController() {
        var equipment = new Equipment();
        var view = new EquipmentView();

        function addItem(item) {
            equipment.addItem(item);
            view.renderWith(equipment.getItemsList());
        }

        return {
            addItem: addItem
        };
    }

    var brpg = window.brpg;
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.EquipmentController = EquipmentController;
    window.brpg = brpg;

})(window, brpg.models.Equipment, brpg.views.EquipmentView);