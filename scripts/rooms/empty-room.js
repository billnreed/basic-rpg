;(function(window) {
    function EmptyRoom() {
        var label = 'Empty room';
        var description = 'It\'s an empty room.';
        var actions = [
            {
                label: 'Go to next room',
                action: brpg.actions.go_to_next_room
            }
        ];

        return {

        }
    }

    var brpg = window.brpg || {};
    brpg.rooms = brpg.rooms || {};
    brpg.rooms.EmptyRoom = EmptyRoom;
    window.brpg = brpg;
})(window);