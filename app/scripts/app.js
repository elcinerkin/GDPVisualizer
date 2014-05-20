'use strict';

angular.module('friendFinderApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
    //,'d3'
  ])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'someData'
    })
    .otherwise({
      redirectTo: '/'
    });
});



//x-y ekseninde uluslarin GDP, Population, GDP per capita grafigi. 
//data visualization X: Population, y GDP per capita, 
//dairenin buyuklugu: GDP (bence bu daire yaricapi, r'yi GDP'ye gore normalize ederek yapilabilir)