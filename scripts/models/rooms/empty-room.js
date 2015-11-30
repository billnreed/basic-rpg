;(function(window) {
    function EmptyRoom() {
        var title = 'Empty room';
        var description = 'It\'s an empty room.';
        var actions = [
            {
                label: 'Go to next room',
                action: brpg.actions.go_to_next_room
            }
        ];

        function getRoomInfo() {
            return {
                title: title,
                description: description
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
})(window);