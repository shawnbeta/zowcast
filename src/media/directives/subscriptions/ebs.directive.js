(function() {
    'use strict';

    angular
        .module('app.media')
        .directive('ebs', ebs);

    function ebs(){

        return {
            restrict : 'E',
            //controller: 'EpisodeController',
            //controllerAs: 'vm',
            //bindToController: true,
            //
            //link: function(scope){
            //    scope.episodesBySubscription = function(subscription){
            //        scope.activeSubscription = subscription.id;
            //        scope.subscriptionFilterStatus = true;
            //    };
            //    scope.listAllEpisodes = function(){
            //        scope.activeSubscription = 0;
            //        scope.subscriptionFilterStatus = false;
            //    };
            //},

            templateUrl: 'src/libs/media/templates/subscriptions/ebs.html'
        };
    }
})();

