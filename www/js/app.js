(function() { 
  
  var app = angular.module('datespot', ['ionic']);

  // Controller to manage scrolling menu for occasions
  app.controller('ScrollCtrl', ['$scope', function($scope) {
    $scope.data = {
      isLoading: false
    };
  }]);

  // Controller to manage functionality for the Filter
  // app.controller('FilterCtrl', function($scope, User) {
  //   $scope.runFilter = function (bool) {  
  //     // To be expanded and perform the jSON query when
  //     // the user has changed the search parameters
  //     console.log('Runfilter clicked!'); 
  //   }
  // };  
  

  // Controller to manage the datespot shortlist
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

  // Controller to manage detail page (details for each venue)
  app.controller('DetailCtrl', function($scope) {
    $scope.spots
  });

  // Controller to manage discovery and swipe functionality
  app.controller('DiscoverCtrl', function($scope, $timeout, User, Recommendations) {
    
    FactoryFuck.Scrot();

    $scope.spots = [
      {
        name: "Sexy Venue",
        description: "this is a sweet venue",
        address: "33 Sexy Street"
      },

      {
        name: "Seductive Spot",
        description: "ideal to impress",
        address: "22 Seduction Street"
      }
    ];

      // Get our recommended datespots
      Recommendations.getVenues()
      .then(function(){
        
        $scope.currentSpot = Recommendations.queue[0];
        
        console.log($scope.currentSpot);
      });

    // Fired when we favorite or skip a datespot
    $scope.sendFeedback = function (bool) {
      // first, add to favorites if they favorited
      if (bool) User.addSpotToFavorites($scope.currentSpot);
      $scope.currentSpot.rated = bool;
      $scope.currentSpot.hide = true;

    // Drop the current venue from the results list and load the next one.
    Recommendations.nextVenue();

      $timeout(function() {
        // $timeout to allow animation to complete
        $scope.currentSpot = Recommendations.queue[0];
      
        console.log('Loading Venue: ');
        console.log( $scope.currentSpot );
      
      }, 250);
    }

    $scope.spotDestroyed = function(index) {
      $scope.spots.splice(index, 1);
    };

    $scope.spotSwiped = function(index) {
      var newSpot = // new spot data
      $scope.spot.push(newSpot);
    };

  });


  app.controller('FavoritesCtrl', function($scope, User) {
    // get the list of our favorites from the user service
    $scope.favorites = User.favorites;

    $scope.removeSpot = function(spot, index) {
      User.removeSpotFromFavorites(spot, index);
    }
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

  })

  .constant('SERVER', {
    url: 'http://ds.urandom.info'
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












