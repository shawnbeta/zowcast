(function() {
    'use strict';

    angular
        .module('app.media')
        .directive('episodeItem', episodeItem);

    episodeItem.$inject = ['PlayerService', 'MessageService', 'OverlayService'];

    function episodeItem(PlayerService, MessageService, OverlayService){

    return  {

        restrict: 'E',

        scope: true,

        link: function(scope){

            scope.togglePlayback = function( episode ){
                PlayerService.togglePlayback( episode );
            };

            scope.togglePlaybackIcon = function( episode ){
                return PlayerService.togglePlaybackIcon( episode );
            };

            scope.showEpisodeDetails = function( episode ){
                OverlayService.setOverlay( scope.overlayObject, episode );
            };

            scope.updateWatched = function(){
                MessageService.displayMessage(
                    'This feature has been disabled.', 'swSuccess fixed', MessageService.closeMessageTimer()
                );
            };
        },

        templateUrl: 'src/libs/media/templates/episodes/item.html'
    };

    }
})();