app.controller('homeCtrl', ["$scope", "$sce", "node", "texts", function($scope, $sce, node, texts){
    $scope.title = null;
    $scope.sce = $sce;
    $scope.splash = true;
    $scope.data = [];
    $scope.mediaBoard = false;
    
    setTimeout(function(){
        $scope.$apply(function() {
            $scope.splash = false;
        });
    }, 1000);
    
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
            
            $scope.$apply(function() {
                $scope.data = texts.getByTag(params.edges[0]);
                $scope.title = params.edges[0];
            });

            if(params.edges.length == 0){
              $scope.$apply(function() {
                $scope.title = null;
            });
            } 
        }
        else{
            $scope.scrollTop();
            $scope.$apply(function() {
                $scope.data = texts.getByTag(params.nodes[0]);
                $scope.title = params.nodes[0];
            });
            
        }
    });

    window.hisNameIs = function(){
        window.open('https://www.youtube.com/watch?v=XgUB3lF9IQA','_blank');
    }

}]);