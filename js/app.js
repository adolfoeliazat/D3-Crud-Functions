/**
 * @author Sam
 */
var app = angular.module("app", ['nvd3ChartDirectives']);

function mainCtrl($scope) {
	$scope.circleData = [];
	var id = null;
	$scope.width = 300;
	$scope.tableData = [{
		id : 1,
		name : "Mark",
		last : "Rose",
		number : 50
	}, {
		id : 2,
		name : "Jeff",
		last : "Fox",
		number : 13
	}, {
		id : 3,
		name : "Lisa",
		last : "Max",
		number : 24
	}, {
		id : 4,
		name : "Tony",
		last : "Tiger",
		number : 30
	}];
	$scope.circleData = $scope.tableData;

	$scope.add = function() {

		var a = $scope.name;
		var b = $scope.last;
		var c = $scope.number;
		var d = ($scope.tableData.length + 1);

		$scope.tableData.push({
			id : d,
			name : a,
			last : b,
			number : c

		});
		$scope.circleData = [];
		$scope.circleData = $scope.tableData;
		$scope.width = $scope.width+1;

	};
	$scope.update =  function () {
		if(id != null){
	$scope.tableData[(id - 1)].name = $scope.name;
	$scope.tableData[(id - 1)].last = $scope.last;
	$scope.tableData[(id - 1)].number = $scope.number;
	$scope.width = $scope.width+1;
	}
	}; 
	$scope.select1 =  function (x) {
	$scope.name = x.name;
	$scope.last = x.last;
	$scope.number = x.number;
	id = x.id;
	}; 

	$scope.yFunc = function() {
		return function(d) {
			return d.number;
		};
	};
	$scope.xFunc = function() {
		return function(d) {
			return d.name;
		};
	};
};

