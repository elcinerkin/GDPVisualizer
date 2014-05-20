'use strict';

var app = angular.module('friendFinderApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'nvd3ChartDirectives'
  ])

.controller('ExampleCtrl', function($scope){

  var getData = function(groups, points, cb) {

    d3.csv('CountryGDP.csv', function(err, data){
       var csvData = [];
      if (data) {
        csvData.push({ 
          key:'Group 0',
          values: []
        });
        data.forEach(function(item, index){
          //var linearScale = d3.scale.linear().domain([0,1000000000]).range([0,100]);
          csvData[0].values.push({
              x:+item.Population, 
              y:+item.GDPpercapita,
              size:Math.random()
          })
        });
        $scope.$apply(function(){
          cb(csvData);
        });
      }
      else{
        console.log('Error', err);
      }
    });  
  }

  getData(1, 40, function(data){$scope.exampleData = data;});

  $scope.getShapeCircle = function(){
      return function(d){
          return 'circle';
      }
  }
})
