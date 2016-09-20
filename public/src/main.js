var app = angular.module('app', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'public/views/home.html',
		controller: 'homeCtrl'
	}).otherwise({ redirectTo: '/' });
});

app.controller('homeCtrl', ["$scope", function($scope){
    
    
    $scope.title = "Boilerplate for angularjs"
    
    var hightlight = "red";
    var bg = "rgba(0,0,0,0.4)";
    var border = "rgba(0,0,0,0.4)";
    
    var color1 = 'red';
    var color2 = 'blue';
    var color3 = 'green';
    var color4 = 'yellow';
    var color5 = 'pink';
    var color6 = 'purple';
    var color7 = 'hotpink';
    var color8 = 'coral';
    var color9 = 'orange';
    var color10 = 'olive';
    var color11 = 'white';
    var color12 = 'black';
    var color13 = 'grey';
    var color14 = 'teal';
    var color15 = 'beige';
    var color16 = 'brown';
    var color17 = 'cornflowerblue';
    var color18 = 'olivedrab';

     var nodes = new vis.DataSet([
        {
            id: 1, 
            shape: 'box',
            label: 'Node 1',
            color: {
                background: bg,
                 highlight: {
                    background: color1,
                    border: color1
                },
                border: border
            }
        },
        {
            id: 2, 
            label: 'Node 2',
            shape: 'box',
            color: {
                background: bg,
                 highlight: {
                    background: color2,
                    border: color2
                },
                border: border
            }
        },
        {
            id: 3, 
            label: 'Node 3',
            shape: 'box',
            color: {
                background: bg,
                highlight: {
                    background: color3,
                    border: color3
                },
                border: border
            }
        },
        {
            id: 4, 
            label: 'Node 4',
            shape: 'box',
            color: {
                background: bg,
                 highlight: {
                    background: color4,
                    border: color4
                },
                border: border
            }
        },
        {
            id: 5, 
            label: 'Node 5',
            shape: 'box',
            color: {
                background: bg,
                 highlight: {
                    background: color5,
                    border: color5
                },
                border: border
            }
        },
         {
            id: 6, 
            label: 'Node 6',
            shape: 'box',
            color: {
                background: bg,
                 highlight: {
                    background: color6,
                    border: color6
                },
                border: border
            }
        },
         {
            id: 7, 
            label: 'Node 7',
            shape: 'box',
            color: {
                background: bg,
                 highlight: {
                    background: color7,
                    border: color7
                },
                border: border
            }
        },
         {
            id: 8, 
            label: 'Node 8',
            shape: 'box',
            color: {
                background: bg,
                 highlight: {
                    background: color8,
                    border: color8
                },
                border: border
            }
        },
         {
            id: 9, 
            label: 'Node 9',
            shape: 'box',
            font: {
                color: '#fff',
                size: 25
            },
            color: {
                background: bg,
                 highlight: {
                    background: color9,
                    border: color9
                },
                border: border
            }
        },
         {
            id: 10, 
            label: 'Node 10',
            shape: 'box',
            font: {
                color: '#fff',
                size: 25
            },
            color: {
                background: bg,
                 highlight: {
                    background: color10,
                    border: color10
                },
                border: border
            }
        }
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 4},
        {from: 1, to: 5},
        {from: 2, to: 4},
        {from: 2, to: 5},
        {from: 3, to: 2},
        {from: 3, to: 5},
        {from: 4, to: 8},
        {from: 4, to: 6},
        {from: 5, to: 2},
        {from: 5, to: 10},
        {from: 6, to: 1},
        {from: 6, to: 2},
        {from: 7, to: 8},
        {from: 7, to: 5},
        {from: 8, to: 3},
        {from: 8, to: 9},
        {from: 9, to: 10},
        {from: 9, to: 4},
        {from: 10, to: 2},
        {from: 10, to: 5},
        {from: 10, to: 1}
    ]);

    // create a network
    var container = document.getElementById('c');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    // initialize your network!
    var network = new vis.Network(container, data, options);

    
    
}]);
