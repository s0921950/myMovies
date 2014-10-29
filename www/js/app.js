// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic'])

.factory('PetService', function() {

    var pets = [];

    for (var i = 0; i < 30; i++) {
        pets[i] = {
            "id": i,
            "firstName": "Name" + i
        };

    }

    return {
        all: function() {
            return pets;
        },
        get: function(petId) {
            return pets[petId];
        }
    };

})

.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('tabs', {
            url: "/tabs",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })


        .state('tabs.master', {
            url: "/master",
            views: {
                'main': {
                    controller: 'MasterCtrl',
                    templateUrl: "templates/master.html"
                }
            }
        })

        .state('tabs.detail', {
            url: "/detail/:petsId",
            views: {
                'main': {
                    controller: 'DetailCtrl',
                    templateUrl: "templates/detail.html"
                }
            }
        });

        $urlRouterProvider.otherwise("tabs/master");
    })
    .controller('MasterCtrl', function($scope, PetService, $ionicScrollDelegate, $http) {
        $scope.pets = PetService.all();

        $scope.scrollBottom = function() {
            $ionicScrollDelegate.scrollBottom(true);
        };

        $scope.movies = [{
            year: 2008,
            title: "The Dark Knight",
            chineseTitle: "黑暗騎士",
            imdb: "tt0468569",
            rottenTomatoes: "771041731"
        }, {
            year: "2014",
            title: "Chef",
            chineseTitle: "五星主廚快餐車",
            imdb: "tt2883512",
            rottenTomatoes: "771357104"
        }, {
            year: "2014",
            title: "Edge of Tomorrow",
            chineseTitle: "明日邊界",
            imdb: "tt1631867",
            rottenTomatoes: "771317257"
        }, {
            year: "2014",
            title: "The Grand Budapest Hotel",
            chineseTitle: "歡迎來到布達佩斯大飯店",
            imdb: "tt2278388",
            rottenTomatoes: "771312437"
        }];
        $scope.lists = [];

        var getLists = function(i) {
            $http.get('http://www.omdbapi.com/?i=' + $scope.movies[i].imdb + '&tomatoes=true').success(function(data) {
                $scope.lists[i] = data;
            }).error(function(data, status, headers, config) { // Do some error handling here }); sleep(1000); i++; }
            });
        };
        for (var i = 0; i < 4; i++) {
            getLists(i);
        }


    })
    .controller('DetailCtrl', function($scope, $stateParams, PetService) {
        $scope.pet = PetService.get($stateParams.petsId);
    });
