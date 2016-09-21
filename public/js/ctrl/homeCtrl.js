app.controller('homeCtrl', ["$scope", "node", function($scope, node){
    //$scope.title = "AIDS OSKAR!!!!"

    $scope.splash = true;
    
    $scope.mediaBoard = false;
    
    $scope.desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, magni. Nobis ullam adipisci voluptates consequatur eveniet deleniti expedita optio, vero quam culpa molestias facere laudantium enim vitae accusamus atque possimus odit voluptatem distinctio repellat eaque, error commodi et nulla.";
    
    
    setTimeout(function(){
        $scope.$apply(function() {
            $scope.splash = false;
        });
    },2000);
    
    $scope.title = null;
    $scope.groups = "grp1";
    
    $scope.changeMediaState = function(){
        $scope.mediaBoard = !$scope.mediaBoard;
    }
    
    
    $scope.scrollTop = function(){
        $("#media_sidebar").animate({ scrollTop: 0 }, "fast");
    }
    
    $scope.network = new vis.Network(document.getElementById('c'), { nodes: new vis.DataSet(node.nodes), edges: new vis.DataSet(node.edges) }, {});
    
    $scope.network.on( 'select', function(params) {
        if(params.nodes == ""){
            $scope.scrollTop();
            console.log("a",params.edges);
            if(params.edges.length == 0){
              $scope.$apply(function() {
                $scope.title = null;
            });
            } 
        }
        else{
            $scope.scrollTop();
            console.log("b", params.nodes[0]);
            $scope.$apply(function() {
                $scope.title = params.nodes[0];
            });
            
        }
    });

}]);
