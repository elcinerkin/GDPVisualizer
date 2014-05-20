'use strict';

var app = angular.module('friendFinderApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'nvd3ChartDirectives'
  ])

//angular.module("nvd3TestApp", ['nvd3ChartDirectives']);
.controller('ExampleCtrl', function($scope){

  var getData = function(groups, points) {
    var data = [],
            shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
            random = d3.random.normal();

    for (var i = 0; i < groups; i++) {
        data.push({
            key: 'Group ' + i,
            values: []
        });

        for (var j = 0; j < points; j++) {
            data[i].values.push({
            x: random()
            , y: random()
            , size: Math.random()
            //, shape: shapes[j % 6]
            });
        }
    }
        return data;
    }

    $scope.exampleData =  getData(4, 40);

    $scope.tooltipXContentFunction = function(){
        return function(key, x, y) {
            return '<strong>YO!' + x + '</strong>'
        }
    }

    $scope.getShapeCross = function(){
        return function(d){
            return 'cross';
        }
    }

    $scope.getShapeDiamond = function(){
        return function(d){
            return 'diamond';
        }
    }

    $scope.getShapeDiamond = function(){
        return function(d){
            return 'diamond';
        }
    }

})


// app.config(function ($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'views/main.html',
//       controller: 'someData'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
// });



//x-y ekseninde uluslarin GDP, Population, GDP per capita grafigi. 
//data visualization X: Population, y GDP per capita, 
//dairenin buyuklugu: GDP (bence bu daire yaricapi, r'yi GDP'ye gore normalize ederek yapilabilir)