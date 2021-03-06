(function() {
    'use strict';

    angular
        .module('app.media')
        .factory('SubscriptionService', SubscriptionService);
    
    SubscriptionService.$inject = [ 'MediaService', 'LoadingService', 'UtilityService', 'MessageService' ];

    function SubscriptionService( MediaService, LoadingService, UtilityService, MessageService ){

        var service = {
            // An array to hold all of our subscription objects
            subscriptionCollection: [],
            add: add,
            sync: sync,
            loadFromLocalStorage: loadFromLocalStorage,
            loadSampleSubscriptions: loadSampleSubscriptions,
            buildSubscription: buildSubscription,
            getSubscriptions: getSubscriptions,
            getSampleSubscriptions: getSampleSubscriptions,
            loadSyncedSubscriptions: loadSyncedSubscriptions
        };

        return service;

        function add( formData ){

            LoadingService.displayLoading(true);
            var data = {
                src: formData.src
            };

            var addRsp = UtilityService.postRequest( data, 'add' );


            var rspA = addRsp.then(function(response){
                    if(response.data.subscription){
                        addNewSubscription(response.data.subscription, response.data.episodes);
                        addToLocalStorage();
                        setSyncedSubscriptions();
                    }else{
                        LoadingService.displayLoading(false);
                        MessageService.displayMessage(
                            'Subscription Addition Failed. Please try another URL.', 'swError',
                            MessageService.closeMessageTimer()
                        );
                    }
                },
                function(){
                    LoadingService.displayLoading(false);
                    MessageService.displayMessage(
                        'Adding the Requested URL resuled in failure', 'swError',
                        MessageService.closeMessageTimer()
                    );
                });

            rspA.then(function(){
                //setSyncedSubscriptions();
                LoadingService.displayLoading(false);
                MessageService.displayMessage(
                    'New Subscription Added.', 'swSuccess', MessageService.closeMessageTimer()
                );
            });
        }

        function sync(){
            // Get the users(BROWSERS) current subscriptions from localStorage
            var syncedSubscriptions = localStorage.getItem('syncedSubscriptions') ?
                localStorage.getItem('syncedSubscriptions') : null;
            var data = { syncedSubscriptions: syncedSubscriptions };
            return UtilityService.postRequest( data, 'sync' );
        }



        function loadSyncedSubscriptions(subscriptions){
            localStorage.setItem('subscriptions', JSON.stringify( subscriptions ));
            MediaService.setSubscriptions( subscriptions );
        }

        function addNewSubscription(subscription, episodes){
            // Add the new subscription information to the service array
            MediaService.subscriptions.push(subscription);
            Array.prototype.push.apply(MediaService.episodes, episodes);
        }


        function addToLocalStorage(){
            localStorage.setItem('subscriptions', JSON.stringify(MediaService.subscriptions));
            localStorage.setItem('episodes', JSON.stringify(MediaService.episodes));
        }

        function getSubscriptions(service){
            return service.subscriptionCollection;
        }

        function loadFromLocalStorage() {
            var subscriptionCollection = localStorage.getItem('subscriptions') ?
            JSON.parse(localStorage.getItem('subscriptions')) : [];
            MediaService.setSubscriptions( subscriptionCollection );
        }

        function loadSampleSubscriptions(){
            var subscriptionCollection = getSampleSubscriptions();
            localStorage.setItem('subscriptions', JSON.stringify( subscriptionCollection ));
            MediaService.setSubscriptions( subscriptionCollection );
        }

        function buildSubscription( subscription ){
            subscription.id =  parseInt(subscription.id);
            subscription.auto_download = parseInt(subscription.auto_download);
            subscription.create_date = parseInt(subscription.create_date);
            subscription.modified_date = parseInt(subscription.modified_date);
            return subscription;
        }

        function setSyncedSubscriptions(){
            var count = MediaService.subscriptions.length;
            var syncedSubscriptions = [];
            for(var i=0;i<count;i++){
                syncedSubscriptions.push(MediaService.subscriptions[i].id);
            }
            localStorage.setItem('syncedSubscriptions', JSON.stringify(syncedSubscriptions));
        }

        function getSampleSubscriptions() {
            return [{
                "id": 3,
                "title": "What The Tech",
                "description": "Hosted by Andrew Zarian and Paul Thurott; What The Tech!? delivers what every techy needs and that is a spotlight on new and emerging technologies from around the world. They cover everything that is up and coming as well as do live unboxings along with reviews of current products. Join in the conversation because it doesn&rsquo;t matter if you&rsquo;re a noob or a tech vet. You will find something you like!",
                "src": "http://feeds.feedburner.com/Whatthetechgfq",
                "img": "http://www.gfqnetwork.com/wp-content/uploads/powerpress/wtt2048x2048-audio.jpg",
                "createDate": "1445983806000",
                "modifiedDate": "1445983806000",
                "public": true,
                "mediaType": 0,
                "homePage": "http://gfqnetwork.com/category/shows/whatthetech/",
                "machineName": "what-the-tech"
            }, {
                "id": 6,
                "title": "The Morning Stream",
                "description": "The Morning Stream, Mon thru Thurs, every morning, with Scott Johnson and the Frogpants Network. News, culture, politices and talk each and every day!",
                "src": "http://feeds.frogpants.com/morningstream_feed.xml",
                "img": "http://feeds.frogpants.com/morningstream_cover.jpg",
                "createDate": "1445985304000",
                "modifiedDate": "1445985304000",
                "public": true,
                "mediaType": 0,
                "homePage": "http://frogpants.com/morningstream",
                "machineName": "the-morning-stream"
            }, {
                "id": 28,
                "title": "ForceCast Podcast: Star Wars News, Talk, Interviews, and Mor",
                "description": "The latest news, events, and commentary from the Star Wars community.",
                "src": "http://feeds.feedburner.com/weeklyforcecast",
                "img": "http://www.forcecast.net//images/fc-twfc-600x600.jpg",
                "createDate": "1445990074000",
                "modifiedDate": "1445990074000",
                "public": true,
                "mediaType": 0,
                "homePage": "http://www.forcecast.net/",
                "machineName": "forcecast-podcast-star-wars-news-talk-interviews-and-more"
            }, {
                "id": 29,
                "title": "On the Media",
                "description": "The smartest, wittiest, most incisive media analysis show in the universe. The weekly one-hour podcast of NPR&rsquo;s On the Media is your guide to how the media sausage is made. Hosts Brooke Gladstone and Bob Garfield examine threats to free speech and government transparency, criticize media coverage of the week&rsquo;s big stories, examine new technology, and unravel hidden political narratives in the media. In an age of information overload, OTM helps you dig your way out. The Peabody Award winning show is produced by WNYC Radio.",
                "src": "http://feeds.wnyc.org/onthemedia",
                "img": "https://media2.wnyc.org/i/1400/1400/l/80/1/onthemedia-wnycstudios.jpg",
                "createDate": "1445990095000",
                "modifiedDate": "1445990095000",
                "public": true,
                "mediaType": 0,
                "homePage": "http://www.onthemedia.org/series/media-podcast/",
                "machineName": "on-the-media"
            }, {
                "id": 30,
                "title": "FLOSS Weekly (Video-HD)",
                "description": "We're not talking dentistry here; FLOSS all about Free Libre Open Source Software. Join host Randal Schwartz and his rotating panel of co-hosts every Tuesday as they talk with the most interesting and important people in the Open Source and Free Software community.\nRecords live at https://twit.tv/live every Tuesday at 11:00am Eastern / 8:00am Pacific / 15:00 UTC.",
                "src": "http://feeds.twit.tv/floss_video_hd.xml",
                "img": "http://twit.cachefly.net/coverart/floss/floss1400videohd.jpg",
                "createDate": "1445990119000",
                "modifiedDate": "1445990119000",
                "public": true,
                "mediaType": 1,
                "homePage": "http://twit.tv/floss",
                "machineName": "floss-weekly-video-hd"
            }, {
                "id": 31,
                "title": "Daily Tech News Show",
                "description": "On your side.",
                "src": "http://feeds.feedburner.com/DailyTechNewsShow",
                "img": "http://www.dailytechnewsshow.com/wp-content/uploads/2014/01/DTNS_CoverArt1400x1400-TPC.png",
                "createDate": "1445990127000",
                "modifiedDate": "1445990127000",
                "public": true,
                "mediaType": 0,
                "homePage": "http://www.dailytechnewsshow.com/",
                "machineName": "daily-tech-news-show"
            }, {
                "id": 32,
                "title": "Coder Radio MP3",
                "description": "A weekly talk show taking a pragmatic look at the art and business of software development and related technologies.",
                "src": "http://feeds.feedburner.com/coderradiomp3",
                "img": "http://www.jupiterbroadcasting.com/images/CR-rssBadge.jpg",
                "createDate": "1445990137000",
                "modifiedDate": "1445990137000",
                "public": true,
                "mediaType": 0,
                "homePage": "http://www.jupiterbroadcasting.com/",
                "machineName": "coder-radio-mp3"
            }, {
                "id": 33,
                "title": "LINUX Unplugged Podcast",
                "description": "An open show powered by community LINUX Unplugged takes the best attributes of open collaboration and focuses them into a weekly lifestyle show about Linux.",
                "src": "http://feeds.feedburner.com/linuxunplugged",
                "img": "http://www.jupiterbroadcasting.com/images/LASUN-Badge1400.jpg",
                "createDate": "1445990145000",
                "modifiedDate": "1445990145000",
                "public": true,
                "mediaType": 0,
                "homePage": "http://www.jupiterbroadcasting.com/",
                "machineName": "linux-unplugged-podcast"
            }, {
                "id": 38,
                "title": "The Clark Howard Podcast",
                "description": "Nationally-syndicated consumer expert Clark Howard shows you practical money-saving ideas to help you Save More, Spend Less, and Avoid Ripoffs.",
                "src": "http://feeds.feedburner.com/ClarkHowardPodcast",
                "img": "http://www.podcastonesales.com/images/podcast/clarkhowardnew-1400x1400.jpg",
                "createDate": "1445996527000",
                "modifiedDate": "1445996527000",
                "public": true,
                "mediaType": 0,
                "homePage": "http://podcastone.com/",
                "machineName": "the-clark-howard-podcast"
            }];
        }


    }
})();
