app.controller('homeCtrl', ["$scope", "node", function($scope, node){

    //$scope.title = "AIDS OSKAR!!!!"

    $scope.network = new vis.Network(document.getElementById('c'), { nodes: new vis.DataSet(node.nodes), edges: new vis.DataSet(node.edges) }, {});
    
    $scope.network.on( 'select', function(params) {
        if(params.nodes == ""){
            console.log(params.edges);
        }
        else{
            console.log(params.nodes);
        }
    });

}]);
