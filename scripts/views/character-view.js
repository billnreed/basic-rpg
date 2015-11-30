;(function(window) {
    function CharacterView() {

        var $characterStats = $('.js-character-stats');

        function renderWith(stats) {
            $characterStats.empty();

            Object.keys(stats).forEach(function(stat) {
                var $statName =
                    $('<dt>')
                        .addClass('stat-listing__name')
                        .text(stat);

                var $statValue =
                    $('<dd>')
                        .addClass('stat-listing__value')
                        .text(stats[stat]);

                $characterStats
                    .append($statName)
                    .append($statValue);
            });
        }

        return {
            renderWith: renderWith
        }
    }

    var brpg = window.brpg || {};
    brpg.views = brpg.views || {};
    brpg.views.CharacterView = CharacterView;
    window.brpg = brpg;
})(window);