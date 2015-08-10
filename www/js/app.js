(function() { 
  
  var app = angular.module('datespot', ['ionic']);

  // var app = angular.module('datespot.userservices', [])
  // // User factory within the module
  // .factory('User', function() {
    
  //   console.log('Loaded the User Factory');

  //   var o = {
  //     favorites: [],
  //     newFavorites: 0
  //   }

  //   o.addSpotToFavorites = function(spot) {
  //     // make sure there's a date spot to add
  //     if (!spot) return false;

  //     // add to favorites array
  //     o.favorites.unshift(spot);
  //     o.newFavorites++;
  //   }

  //   o.removeSpotFromFavorites = function(spot, index) {
  //     // make sure there's a date spot to add
  //     if (!spot) return false;

  //     // add to favorites array
  //     o.favorites.splice(index, 1);
  //   }

  //   o.favoriteCount = function() {
  //     return o.newFavorites;
  //   }
  //   return o;
    
  // }) // notice the termination here, as we're terminating the factory ONLY

  // // Recommendations Factory
  // .factory('FactoryFuck', function() {
    
  //     console.log('Loaded the FactoryFuck Factory');  
    
  //   return {
  //     Scrot: function(){
        
  //         console.log('So we managed to load some fucking factory. It worked?');
  //     }
  //   }
      
  // }); 


  // // notice the termination here, as we're terminating the factory AND the module! Extra ';'


  // var app = angular.module('datespot.jsonservices', [])
  //   .factory('Recommendations', function($http, SERVER) {
      
  //     console.log('Loaded the Recommendations Factory');  
  //     console.log('The Server Address is at: ' + SERVER.url);
      
  //     // We need to insure we are always returing a value from a factory definition
  //     var o = {
  //       queue: [],
  //       newFavorites: 0
  //     }

  //     // Function: Get Venues 
  //     o.getVenues = function() {
        
  //     var url = SERVER.url + '/client.php?a=all';
  //     console.log('Getting venues from ' + url);
      
  //       return $http({
  //         method: 'GET',
  //         url: url
  //       }).success(function(data)
  //     {
  //         // merge data into the queue
  //       o.queue = o.queue.concat(data.points); // get the array of 'points'

  //       // OK so we've apparently received something here, we need to loop through the results
  //       console.log('Looping through results...');
  //       for(i in data.points) 
  //       { 
  //         console.log(data.points[i]);
  //       }
        
  //      // console.log(data.points); 
  //       });
      
  //     } // end getVenues

      
  //     // Function: Next Venue 
  //     o.nextVenue = function() {
  //       // pop the index 0 off
  //       o.queue.shift();

  //       // low on the queue? lets fill it up
  //       if (o.queue.length <= 3) {
  //        // o.getVenues(); // we don't do this as our JSON provides all venues currently
  //       }
  //     }
      
  //     // Return the function definitions
  //     return o;
      
  // });

  // /* Some basic ionic utilities to be used for local storage of variable */
  // var app = angular.module('ionic.utils', [])
  // .factory('$localstorage', ['$window', function($window) {
  //   return {
  //     set: function(key, value) {
  //       $window.localStorage[key] = value;
  //     },
  //     get: function(key, defaultValue) {
  //       return $window.localStorage[key] || defaultValue;
  //     },
  //     setObject: function(key, value) {
  //       $window.localStorage[key] = JSON.stringify(value);
  //     },
  //     getObject: function(key) {
  //       return JSON.parse($window.localStorage[key] || '{}');
  //     }
  //   }
  // }]);

  

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
