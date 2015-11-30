;(function(window, Character, CharacterView) {
    function CharacterController(userActions) {
        var character = new Character();
        var view = new CharacterView();

        view.renderWith(character.getStats());
    }

    var brpg = window.brpg || {};
    brpg.controllers = brpg.controllers || {};
    brpg.controllers.CharacterController = CharacterController;
    window.brpg = brpg;

})(window, brpg.models.Character, brpg.views.CharacterView);