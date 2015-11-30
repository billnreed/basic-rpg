;(function(window) {
    function Character() {
        var health = 10;
        var strength = 0;
        var defense = 0;

        var itemStrength = 0;
        var itemDefense = 0;

        function addStatsFromItem(item) {
            itemStrength += item.strength;
            itemDefense += item.defense;
        }

        function removeStatsFromItem(item) {
            itemStrength -= item.strength;
            itemDefense -= item.defense;
        }

        function getStats() {
            return {
                health: health,
                strength: strength + itemStrength,
                defense: defense + itemDefense
            }
        }

        return {
            removeStatsFromItem: removeStatsFromItem,
            addStatsFromItem: addStatsFromItem,
            getStats: getStats
        }
    }

    var brpg = window.brpg || {};
    brpg.models = brpg.models || {};
    brpg.models.Character = Character;
    window.brpg = brpg;

})(window);