;(function(window) {
    function GoToNextRoomAction() {
        var nextRoom = this.roomFlowManager.getNextRoom();

        this.roomController.setRoom(nextRoom);
        this.eventLogController.wentToRoom(nextRoom);
    }

    var brpg = window.brpg || {};
    brpg.actions = brpg.actions || {};
    brpg.actions.GoToNextRoomAction = GoToNextRoomAction;
    window.brpg = brpg;
})(window);