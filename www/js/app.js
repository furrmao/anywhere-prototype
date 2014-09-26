// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
    'ionic',
    'app.controllers',
    'app.services',
    'ng.contentful.config',
    'ng.contentful',
    'masonry'
])

    .run(function ($ionicPlatform, contentfulConfig) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        // contentful config
        contentfulConfig.spaceId = "lx12mec53sjz";
        contentfulConfig.accessToken = "ba94d6d0af027b1effcc78cb13fea789be20b8b211991a33bb4a06d09a46e9dd";
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
//            .state('tab', {
//                url: "/tab",
//                abstract: true,
//                templateUrl: "templates/tabs.html"
//            })

            .state('chrome', {
                url: "/chrome",
                abstract: true,
                templateUrl: "templates/chrome.html"
            })


            // Each tab has its own nav history stack:

            .state('chrome.page', {
                url: '/page',
                views: {
                    'page': {
                        templateUrl: 'templates/page.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.friends', {
                url: '/friends',
                views: {
                    'tab-friends': {
                        templateUrl: 'templates/tab-friends.html',
                        controller: 'FriendsCtrl'
                    }
                }
            })
            .state('tab.friend-detail', {
                url: '/friend/:friendId',
                views: {
                    'tab-friends': {
                        templateUrl: 'templates/friend-detail.html',
                        controller: 'FriendDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
//        $urlRouterProvider.otherwise('/tab/page');
        $urlRouterProvider.otherwise('/chrome/page');

    });




