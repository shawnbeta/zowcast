(function() {
    'use strict';

    angular
        .module('app.ui')
        .controller('ActionController', ActionController);

    ActionController.$inject = [  '$scope', '$location', 'MediaService', 'EpisodeService', 'SubscriptionService',
     'NavigationService', 'UtilityService', 'DOMService'];


    function ActionController(  $scope, $location, MediaService, EpisodeService, SubscriptionService, NavigationService,
                                UtilityService, DOMService ){

        var vm = this;
        vm.navigation = NavigationService.getNavigation();
        vm.currentPath = UtilityService.getCurrentPath();

        $scope.go = go;
        $scope.sync = sync;
        $scope.loadSamples = loadSamples;
        $scope.clearLocalStorage = clearLocalStorage;
        $scope.$on('$routeChangeSuccess', function(){
            vm.currentPath = UtilityService.getCurrentPath();
        });
        $scope.toggleMenu  = function(){
            DOMService.toggleMenu();
        };


        /////////////

        function go(path){
            $location.path(path);
            DOMService.scrollToTop();
        }

        function clearLocalStorage(){
            localStorage.removeItem('subscriptions');
            localStorage.removeItem('episodes');
            MediaService.purgeSubscriptions();
            MediaService.purgeEpisodes();
        }

        function loadSamples(){
            //clearLocalStorage();
            EpisodeService.loadSampleEpisodes();
            SubscriptionService.loadSampleSubscriptions();
        }

        function sync(){
            var rsp = SubscriptionService.sync();
            rsp.then(function(response){
                EpisodeService.loadSyncedEpisodes(response.data.episodes);
                SubscriptionService.loadSyncedSubscriptions(response.data.subscriptions);
            });

        }

    }
})();
