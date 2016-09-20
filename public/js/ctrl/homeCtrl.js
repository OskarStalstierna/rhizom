app.controller('homeCtrl', ["$scope", "node", function($scope, node){
    //$scope.title = "AIDS OSKAR!!!!"

    $scope.title = "Rhizom";
    $scope.groups = "grp1";
    
    $scope.network = new vis.Network(document.getElementById('c'), { nodes: new vis.DataSet(node.nodes), edges: new vis.DataSet(node.edges) }, {});
    
    $scope.network.on( 'select', function(params) {
        if(params.nodes == ""){
            console.log("a",params.edges);
        }
        else{
            console.log("b", params.nodes[0]);
            $scope.$apply(function() {
                $scope.title = params.nodes[0];    
            });
            
        }
    });

}]);
