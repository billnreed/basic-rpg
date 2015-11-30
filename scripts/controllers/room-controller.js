;(function(window, RoomView) {
    function RoomController(_actionExecutor_) {
        var actionExecutor = _actionExecutor_;
        var room;
        var view = new RoomView();

        function setRoom(newRoom) {
            room = newRoom;
            view.renderWith(room.getRoomInfo());
        }

        return {
            setRoom: setRoom
        }
    }

    var brpg = window.brpg || {};
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.RoomController = RoomController;
    window.brpg = brpg;
})(window, brpg.views.RoomView);