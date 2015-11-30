;(function(window, Character, CharacterView) {
    function CharacterController() {
        var character = new Character();
        var view = new CharacterView();

        view.renderWith(character.getStats());

        function addStatsFromItem(item) {
            character.addStatsFromItem(item);
            view.renderWith(character.getStats());
        }

        function removeStatsFromItem(item) {
            character.removeStatsFromItem(item);
            view.renderWith(character.getStats());
        }

        return {
            removeStatsFromItem: removeStatsFromItem,
            addStatsFromItem: addStatsFromItem
        }
    }

    var brpg = window.brpg || {};
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.CharacterController = CharacterController;
    window.brpg = brpg;

})(window, brpg.models.Character, brpg.views.CharacterView);