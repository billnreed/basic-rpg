;
(function(window) {

    function EventLogView() {
        var $eventLog = $('.js-event-log');

        function renderWith(eventLog) {
            $eventLog.empty();

            eventLog.forEach(function(event) {
                var $message =
                    $('<div>')
                        .text(event);

                $eventLog.append($message);
            })
        }

        return {
            renderWith: renderWith
        }
    }

    var brpg = window.brpg || {};
    brpg.views = brpg.views || {};
    brpg.views.EventLogView = EventLogView;
    window.brpg = brpg;
})(window);