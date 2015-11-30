;(function(window, EmptyRoom) {
    function GoToNextRoomAction() {
        var room = new EmptyRoom();
        this.roomController.setRoom(room);
        this.eventLogController.wentToRoom(room);
    }

    var brpg = window.brpg || {};
    brpg.actions = brpg.actions || {};
    brpg.actions.GoToNextRoomAction = GoToNextRoomAction;
    window.brpg = brpg;
})(window, brpg.rooms.EmptyRoom);