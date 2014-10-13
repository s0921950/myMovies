// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [ 'ionic' ])

.controller(
		'MovieCtrl',
		function($scope, $http) {
			/*
			 * var apikey = ""; var baseUrl =
			 * "http://api.rottentomatoes.com/api/public/v1.0"; // construct the
			 * uri with our apikey var moviesSearchUrl = baseUrl +
			 * '/771253886.json?apikey=' + apikey;
			 * 
			 * 
			 * $(document).ready(function() { // send off the query $.ajax({
			 * url: moviesSearchUrl, dataType: "jsonp", success: searchCallback
			 * }); });
			 * 
			 * 
			 * 
			 * function searchCallback(data) { $scope.movie = data; }
			 */
			$scope.movies = [ {
				year : "2008",
				title : "The Dark Knight",
				chineseTitle : "黑暗騎士",
				imdb : "tt0468569",
				rottenTomatoes : "771041731"
			}, {
				year : "2014",
				title : "Chef",
				chineseTitle : "五星主廚快餐車",
				imdb : "tt2883512",
				rottenTomatoes : "771357104"
			}, {
				year : "2014",
				title : "Edge of Tomorrow",
				chineseTitle : "明日邊界",
				imdb : "tt1631867",
				rottenTomatoes : "771317257"
			} ];
			$scope.lists = [];
//			/*
//			 * $scope.lists = []; var i = 0; while( i < 2){
//			 * $http.get('http://www.omdbapi.com/?i=' + $scope.movies[i].imdb +
//			 * '&tomatoes=true') .success(function(data) { $scope.list[i-1] =
//			 * data; console.log(i-1); }).error(function(data, status, headers,
//			 * config) { // Do some error handling here }); sleep(1000); i++; }
//			 */
			
			var getLists = function(i) {
				$http.get('http://www.omdbapi.com/?i=' + $scope.movies[i].imdb + '&tomatoes=true').success(function(data) {
					$scope.lists[i] = data;
				}).error(function(data, status, headers,config) 
						{ // Do some error handling here }); sleep(1000); i++; }
				});
			};
			for (var i = 0; i < 3; i++) {
				  getLists(i);
				}


			/*
			 * $http.get('http://www.omdbapi.com/?i=' + $scope.movies[1].imdb +
			 * '&tomatoes=true') .success(function(data) { $scope.lists =
			 * [$scope.lists[0], data]; }).error(function(data, status, headers,
			 * config) { // Do some error handling here });
			 * 
			 * $http.get('http://www.omdbapi.com/?i=' + $scope.movies[2].imdb +
			 * '&tomatoes=true') .success(function(data) { $scope.lists =
			 * [$scope.lists[0], $scope.lists[1], data]; }).error(function(data,
			 * status, headers, config) { // Do some error handling here });
			 */

			/*
			 * $http.get('http://api.rottentomatoes.com/api/public/v1.0/movies/771253886.json?apikey=')
			 * .success(function (data) { $scope.rotten = data; })
			 * .error(function (data, status, headers, config) { // Do some
			 * error handling here });
			 */
		});