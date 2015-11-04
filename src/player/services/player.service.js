(function() {
    'use strict';

    angular
        .module('app.player')
        .factory('PlayerService', PlayerService);

    PlayerService.$inject = ['$interval', '$sce'];

    function PlayerService($interval, $sce){

        var ticker;
        return {

            playerObject: null,

            getPlayerObject: function(){
                if( this.playerObject === null )
                    return ( this.playerObject = this.initializePlayerObject() );
                return this.playerObject;
            },

            initializePlayerObject: function(){

                return  {
                    status: null, // Player playback status
                    elementWrapper: null,
                    element: null, // jQuery to get the video or audio element
                    loadedEpisode:{id: null}, // the episode in the player
                    counter: null
                };
            },

            togglePlayback: function( playerObject, episode ){
                var firstRun;
                if(episode.id !== playerObject.loadedEpisode.id){
                    playerObject = this.loadMedia( playerObject, episode);
                    firstRun = true;
                }
                if(playerObject.status != 'playing' || playerObject.status == 'playing' && this.firstRun)
                    return this.playAction( playerObject, firstRun );
                return this.pauseAction( playerObject );
            },

            togglePlaybackIcon: function( playerObject, episode ){
                return playerObject.loadedEpisode == episode && playerObject.status == 'paused' ? 'pause' : 'play';
            },

            loadMedia: function( playerObject, episode ){
                playerObject.loadedEpisode = episode;
                playerObject.loadedEpisode.location = $sce.trustAsResourceUrl(episode.src);
                return playerObject;
            },

            playAction: function( playerObject, firstRun ){
                var self = this;
                this.startCounter( playerObject );
                playerObject.status = 'playing';
                playerObject.episodePlaying = playerObject.loadedEpisode.id;
                if(firstRun){
                    this.firstRun = false;
                    playerObject.element.oncanplay = function(){
                        playerObject.element.play();
                        playerObject.runtime = self.getDuration(playerObject.element.duration);
                    };
                }else{
                    playerObject.element.play();
                }
                return playerObject;
            },

            pauseAction: function( playerObject ){
                this.pauseCounter();
                playerObject.element.pause();
                playerObject.status = 'paused';
                playerObject.episodePlaying = false;
                return playerObject;
            },


            startCounter: function( playerObject ){
                var self = this;
                ticker = $interval(function( ){
                    self.updateCounter( playerObject );
                }, 1000);
            },

            pauseCounter: function(){
                if(angular.isDefined(ticker)){
                    $interval.cancel(ticker);
                    ticker = undefined;
                }
            },

            updateCounter: function( playerObject ){
                var time = playerObject.element.currentTime;
                var pad = function(val){
                    return val > 9 ? val : "0" + val;
                };
                var sec = Math.floor(time);
                var counter = {};
                counter.seconds = pad(++sec % 60);
                counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
                counter.hours = pad(parseInt(sec / 3600, 10));
                playerObject.counter = counter;
            },

            getDuration: function( duration ){
                var pad = function(val){
                    return val > 9 ? val : "0" + val;
                };
                var sec = Math.floor(duration);
                var counter = {};
                counter.seconds = pad(++sec % 60);
                counter.minutes = pad(pad(parseInt(sec / 60, 10) % 60));
                counter.hours = pad(parseInt(sec / 3600, 10));
                return counter;
            },



            rewind: function( playerObject ){
                var currentTime = parseInt(playerObject.element.currentTime);
                playerObject.element.currentTime = currentTime - 20;
                return playerObject;
            },

            forward: function( playerObject ){
                var currentTime = parseInt(playerObject.element.currentTime);
                playerObject.element.currentTime = currentTime + 20;
                return playerObject;
            },

            jumpBack: function( playerObject ){
                var currentTime = parseInt(playerObject.element.currentTime);
                playerObject.element.currentTime = currentTime - 300;
                return playerObject;
            },

            jumpAhead: function( playerObject ){
                var currentTime = parseInt(playerObject.element.currentTime);
                playerObject.element.currentTime = currentTime + 300;
                return playerObject;
            },

            volumeDown: function( playerObject ){
                playerObject.element.volume-=0.1;
                return playerObject;
            },

            volumeUp: function( playerObject ){
                playerObject.element.volume+=0.1;
                return playerObject;
            },

            setVolumeTo: function( playerObject ){
                playerObject.element.volume=val;
                return playerObject;
            }

        };

    }
})();




 