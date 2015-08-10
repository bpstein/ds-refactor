angular.module('datespot.controllers', ['ionic', 'datespot.userservices', 'datespot.jsonservices'])

	// Controller for the FILTER tab
	.controller('FilterCtrl', function($scope, User) {
		$scope.runFilter = function (bool) {
			// To be expanded and perform the jSON query when the user has changed the seach parameters
			console.log('Runfilter clicked!');
		}
	});

	
	// Controller to manage scrolling menu for occasions
  .controller('ScrollCtrl', ['$scope', function($scope) {
    $scope.data = {
      isLoading: false
    };
  }]);


  // Controller to manage discovery and swipe functionality
  .controller('DiscoverCtrl', function($scope, $timeout, User, Recommendations) {
    
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
      $scope.spotst.push(newSpot);
    };
  });

	
	// Controller to manage favorites
	.controller('FavoritesCtrl', function($scope, User) {
    // get the list of our favorites from the user service
    $scope.favorites = User.favorites;

    $scope.removeSpot = function(spot, index) {
      User.removeSpotFromFavorites(spot, index);
    }
  });
  
	
	// Controller to manage the datespot shortlist
  .controller('ListCtrl', function($scope) {
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
  .controller('DetailCtrl', function($scope) {
    $scope.spots
  });