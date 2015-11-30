;(function(window) {

    function EquipmentView() {
        var $equipmentList = $('.js-equipment-list');

        function renderWith(equipmentList) {
            $equipmentList.empty();

            equipmentList.forEach(function(item) {
                var $equipmentItemName =
                    $('<span>')
                        .addClass('equipment-item__name')
                        .text(item);

                $('<li>')
                    .addClass('equipment-item')
                    .append($equipmentItemName)
                    .appendTo($equipmentList);
            });
        }

        return {
            renderWith: renderWith
        }
    }

    var brpg = window.brpg || {};
    brpg.views = brpg.views || {};
    brpg.views.EquipmentView = EquipmentView;
    window.brpg = brpg;
})(window);