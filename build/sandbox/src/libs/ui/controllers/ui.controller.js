(function() {
    'use strict';

    angular
        .module('app.ui')
        .controller('UIController', UIController);

    UIController.$inject = [ '$scope', 'MediaService', 'UIDataService'  ];

    function UIController( $scope, MediaService, UIDataService ){

        var vm = this;

        vm.message = UIDataService.message;
        vm.overlay = UIDataService.overlay;
        vm.loading = UIDataService.loading;
        vm.mask = UIDataService.mask;
        // Needed to present subscriptions in overlay
        vm.subscriptions = MediaService.subscriptions;

        $scope.closeMessage = function(){
            UIDataService.closeMessage();
        };

        $scope.closeOverlay = function(){
            if(UIDataService.overlay.style)
                UIDataService.closeOverlay();
        };

    }
})();
