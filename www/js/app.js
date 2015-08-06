(function() { 
  
  var app = angular.module('datespot', ['ionic']);

  app.controller('ListCtrl', function($scope) {
    $scope.spots = [
      {
        name: "Sexy Venue",
        description: "this is a sweet venue"
      },

      {
        name: "Seductive Spot",
        description: "ideal to impress"
      }
    ];
  });


  // Configurations for tab and view navigation of app
  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('discover', {
      url: '/discover',
      views: {
        'tab-discover': {
          templateUrl: 'templates/discover.html'
        }
      }
    });

    $stateProvider.state('settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/settings.html'
        }
      }
    });

    $stateProvider.state('filter', {
      url: '/filter',
      views: {
        'tab-filter': {
          templateUrl: 'templates/filter.html'
        }
      }
    });

    $stateProvider.state('shortlist', {
      url: '/shortlist',
      controller: 'ListCtrl',
      views: {
        'tab-shortlist': {
          templateUrl: 'templates/shortlist.html'
        }
      }
    });

     $stateProvider.state('detail', {
      url: '/detail',
      views: {
        'tab-shortlist': {
          templateUrl: 'templates/detail.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/discover');

  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

}());
