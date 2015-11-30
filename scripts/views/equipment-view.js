;
(function(window) {

    function EquipmentView() {
        var onUnequipCallback;
        var $equipmentList = $('.js-equipment-list');

        function onUnequip(fn) {
            onUnequipCallback = fn;
        }

        function renderWith(equipmentList) {
            $equipmentList.empty();

            equipmentList.forEach(function(item) {
                var $equipmentItemName =
                    $('<span>')
                        .addClass('equipment-item__name')
                        .text(item);

                var $equipmentItemAction =
                    $('<span>')
                        .addClass('equipment-item__action')
                        .text('unequip')
                        .click(function() {
                                   onUnequipCallback(item);
                               });

                $('<li>')
                    .addClass('equipment-item')
                    .append($equipmentItemName)
                    .append($equipmentItemAction)
                    .appendTo($equipmentList);
            });
        }

        return {
            onUnequip: onUnequip,
            renderWith: renderWith
        }
    }

    var brpg = window.brpg || {};
    brpg.views = brpg.views || {};
    brpg.views.EquipmentView = EquipmentView;
    window.brpg = brpg;
})(window);