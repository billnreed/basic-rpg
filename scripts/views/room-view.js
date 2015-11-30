;(function(window) {

    function RoomView() {
        var $roomTitle = $('.js-room-title');
        var $roomDescription = $('.js-room-description');
        var $roomActions = $('.js-room-actions');

        function renderWith(roomInfo) {
            $roomTitle.text(roomInfo.title);
            $roomDescription.text(roomInfo.description);

        }

        return {
            renderWith: renderWith
        }
    }

    var brpg = window.brpg || {};
    brpg.views = brpg.views || {};
    brpg.views.RoomView = RoomView;
    window.brpg = brpg;
})(window);