;(function(window, Equipment, EquipmentView) {
    function EquipmentController() {
        var equipment = new Equipment();
        var view = new EquipmentView();
    }

    var brpg = window.brpg;
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.EquipmentController = EquipmentController;
    window.brpg = brpg;

})(window, brpg.models.Equipment, brpg.views.EquipmentView);