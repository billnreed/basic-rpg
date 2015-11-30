;(function(window, rooms) {
    function RoomFlowManager() {
        function getNextRoom() {
            return new rooms.EmptyRoom();
        }

        return {
            getNextRoom: getNextRoom
        }
    }

    var brpg = window.brpg || {};
    brpg.RoomFlowManager = RoomFlowManager;
    window.brpg = brpg;
})(window, brpg.rooms, brpg.actions.GoToNextRoomAction);