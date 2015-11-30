;(function(window) {
    function EventLog() {
        var events = [];

        function equippedItem(item) {
            var message = 'Equipped ' + item.name;
            events.push(message);
        }

        function unequippedItem(item) {
            var message = 'Unequipped ' + item.name;
            events.push(message);
        }

        function wentToRoom(room) {
            var message = 'Entered ' + room.getRoomInfo().title;
            events.push(message);
        }

        function getMessages() {
            return events;
        }

        return {
            equippedItem: equippedItem,
            unequippedItem: unequippedItem,
            wentToRoom: wentToRoom,
            getMessages: getMessages
        }
    }

    var brpg = window.brpg || {};
    brpg.models = brpg.models || {};
    brpg.models.EventLog = EventLog;
    window.brpg = brpg;
})(window);