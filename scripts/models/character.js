;(function(window) {
    function Character() {
        var health = 10;
        var strength = 0;
        var defense = 0;

        function getStats() {
            return {
                health: health,
                strength: strength,
                defense: defense
            }
        }

        return {
            getStats: getStats
        }
    }

    var brpg = window.brpg || {};
    brpg.models = brpg.models || {};
    brpg.models.Character = Character;
    window.brpg = brpg;

})(window);