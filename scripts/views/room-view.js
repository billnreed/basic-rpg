;
(function(window) {

    function RoomView() {
        var onActionCallback;

        var $roomTitle = $('.js-room-title');
        var $roomDescription = $('.js-room-description');
        var $roomActions = $('.js-room-actions');

        function renderWith(roomInfo) {
            $roomTitle.text(roomInfo.title);
            $roomDescription.text(roomInfo.description);

            $roomActions.empty();
            roomInfo.actions.forEach(function(action) {
                var $action =
                    $('<div>')
                        .text(action.label)
                        .click(function() {
                                   onActionCallback(action);
                               });

                $roomActions.append($action);
            })
        }

        function onAction(fn) {
            onActionCallback = fn;
        }

        return {
            renderWith: renderWith,
            onAction: onAction
        }
    }

    var brpg = window.brpg || {};
    brpg.views = brpg.views || {};
    brpg.views.RoomView = RoomView;
    window.brpg = brpg;
})(window);