app.controller('homeCtrl', ["$scope", "node", function($scope, node){
    //$scope.title = "AIDS OSKAR!!!!"

    $scope.splash = true;
    
    
    $scope.desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, magni. Nobis ullam adipisci voluptates consequatur eveniet deleniti expedita optio, vero quam culpa molestias facere laudantium enim vitae accusamus atque possimus odit voluptatem distinctio repellat eaque, error commodi et nulla.";
    
    
    setTimeout(function(){
        $scope.$apply(function() {
            $scope.splash = false;
        });
    },2000);
    
    $scope.title = null;
    $scope.groups = "grp1";
    
    $scope.network = new vis.Network(document.getElementById('c'), { nodes: new vis.DataSet(node.nodes), edges: new vis.DataSet(node.edges) }, {});
    
    $scope.network.on( 'select', function(params) {
        if(params.nodes == ""){
            console.log("a",params.edges);
            if(params.edges.length == 0){
              $scope.$apply(function() {
                $scope.title = null;
            });
            } 
        }
        else{
            console.log("b", params.nodes[0]);
            $scope.$apply(function() {
                $scope.title = params.nodes[0];
            });
            
        }
    });

}]);
