;
(function(window, EventLog, EventLogView) {
    function EventLogController() {
        var eventLog = new EventLog();
        var view = new EventLogView();

        function equippedItem(item) {
            eventLog.equippedItem(item);
            view.renderWith(eventLog.getMessages());
        }

        function unequippedItem(item) {
            eventLog.unequippedItem(item);
            view.renderWith(eventLog.getMessages());
        }

        function wentToRoom(room) {
            eventLog.wentToRoom(room);
            view.renderWith(eventLog.getMessages());
        }

        return {
            equippedItem: equippedItem,
            unequippedItem: unequippedItem,
            wentToRoom: wentToRoom
        };
    }

    var brpg = window.brpg || {};
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.EventLogController = EventLogController;
    window.brpg = brpg;
})(window, brpg.models.EventLog, brpg.views.EventLogView)