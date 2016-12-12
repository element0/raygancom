/** raygancom/js/app-ng.js

bug alert:
firefox throws an error "angular.min.js is being assigned a //# sourceMappingURL, but already has one"
see 'github.com/angular/angular.js/issues/6529'
looks like its a Firefox bug with other minified js libraries too.

 */

angular.module('raygancom', ['ngRoute'])
	.config( function( $routeProvider, $locationProvider ) {

			/* locationProvider needs to be set up in angularjs 1.6.0 */
			$locationProvider.hashPrefix('!');

			$routeProvider

				.when('/films', {
					templateUrl: "franz.cgi?fs/films",
				})
				.when('/illus', {
					templateUrl: "franz.cgi?fs/illus",
				})
				.when('/softw', {
					templateUrl: "franz.cgi?fs/softw"
				})
				.otherwise( {
					redirectTo: 'films'
				});
		}
    )

	.controller( 'RaygancomController',
		function RaygancomController($scope, $location) {
		    $scope.navSetActive = function( selname ) {
				if($location.path() == '/' + selname) {
					return "raygancom-nav-link-active";
				}
				return "raygancom-nav-link-dormant";
			};
			$scope.nav = [
				{ title: "Films", name: "films", id: "nav_films" },
				{ title: "Illus", name: "illus", id: "nav_illus" },
				{ title: "Softw", name: "softw", id: "nav_softw" }
			];
			$scope.navSetItemStyle = function( islast ) {
				if( islast ) {
					return "raygancom-ctrl-menu-item";
				}
				return "raygancom-ctrl-menu-item raygancom-lowerline";
			};
		}
	) 
;
