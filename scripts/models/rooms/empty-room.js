;(function(window, GoToNextRoomAction) {
    function EmptyRoom() {
        var title = 'Empty room';
        var description = 'It\'s an empty room.';
        var actions = [
            {
                label: 'Go to next room',
                action: GoToNextRoomAction
            }
        ];

        function getRoomInfo() {
            return {
                title: title,
                description: description,
                actions: actions
            };
        }

        return {
            getRoomInfo: getRoomInfo
        }
    }

    var brpg = window.brpg || {};
    brpg.rooms = brpg.rooms || {};
    brpg.rooms.EmptyRoom = EmptyRoom;
    window.brpg = brpg;
})(window, brpg.actions.GoToNextRoomAction);