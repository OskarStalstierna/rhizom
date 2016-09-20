var app = angular.module('app', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'public/views/home.html',
		controller: 'homeCtrl'
	}).otherwise({ redirectTo: '/' });
});

app.controller('homeCtrl', ["$scope", "node", function($scope, node){
    //$scope.title = "AIDS OSKAR!!!!"

    $scope.splash = true;
    
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

(function() {
 
   angular.module('app').factory('node', node);
 
   function node() {

       var shape = "dot";
       var bg = "rgba(255,255,255,0.4)";
       var font = "#fff";
       var border = "rgba(255,255,255,0.4)";
       
       function getColor(){
            var a = [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
            ];
            
            var c = "#";
            for (var i = 0; i < 6; i++) {
                c = c + a[Math.floor(Math.random()*a.length)];
            }

            return c;
        }

       return {
           nodes: [
               //entangled
                {id: "entangled", label: 'Entangled', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: getColor(), shadow: { enabled: true, color: 'rgba(0,0,0,0.8)'}, border: getColor() }, border: border }},
               
               //embeddedness
                {id: "embeddedness", label: 'Embeddedness', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "blue", border: "blue" }, border: border }},
               
               //accountable
                {id: "accountable", label: 'Accountable', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "green", border: "green" }, border: border }},
               
               //constructionist
                {id: "constructionist", label: 'Constructionist', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "yellow", border: "yellow" }, border: border }},
               
               //materiality
                {id: "materiality", label: 'Materiality / Materialization', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "pink", border: "pink" }, border: border }},
               
               //positivist
                {id: "positivist", label: 'Positivist', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "purple", border: "purple" }, border: border }},
               
               //postconstructionist
                {id: "postconstructionist", label: 'Postconstructionist', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "hotpink", border: "hotpink" }, border: border }},
               
               //discursive
                {id: "discursive", label: 'Discursive', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "coral", border: "coral" }, border: border }},
               
               //intraaction
                {id: "intraaction", label: 'Intra-action', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "orange", border: "orange" }, border: border }},
               
               //posthuman
                {id: "posthuman", label: 'Posthuman', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "olivedrab", border: "olivedrab" }, border: border }},
               
               //postcolonial
                {id: "postcolonial", label: 'Postcolonial', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "white", border: "white" }, border: border }},
               
               //feministscience
                {id: "feministscience", label: 'Feminist ...science', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "black", border: "black" }, border: border }},
               
               //digitaldivides
                {id: "digitaldivides", label: 'Digital divides', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: getColor(), border: getColor() }, border: border }},
               
               //epistemological
                {id: "epistemological", label: 'Epistemological', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "teal", border: "teal" }, border: border }},
               
               //becomingwith
                {id: "becomingwith", label: 'Becoming with', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "beige", border: "beige" }, border: border }},
               
               //deconstruction
                {id: "deconstruction", label: 'Deconstruction', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "brown", border:"brown" }, border: border }},
               
               //methodologies
                {id: "methodologies", label: 'Methodologies', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "olive", border: "olive" }, border: border }},
               
               //situatedknowledges
                {id: "situatedknowledges", label: 'Situated knowledges', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "cornflowerblue", border: "cornflowerblue" }, border: border }},
               
               //transdisciplinary
                {id: "transdisciplinary", label: 'Transdisciplinary science', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "bisque", border: "bisque" }, border: border }},
               
               //diffraction
                {id: "diffraction", label: 'Diffraction', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "saddlebrown", border: "saddlebrown" }, border: border }},
               
               //ontologi
               {id: "ontologi", label: 'Ontologi', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: getColor(), border: getColor() }, border: border }},
           ],
           edges: [
               //epistemological Gr8
               {from: "epistemological", to: "situatedknowledges"},
               {from: "epistemological", to: "ontologi"},
               {from: "epistemological", to: "accountable"},
               {from: "epistemological", to: "digitaldivides"},
               {from: "epistemological", to: "diffraction"},
               
               //embeddedness Gr10
               {from: "embeddedness", to: "discursive"},
               {from: "embeddedness", to: "digitaldivides"},
               {from: "embeddedness", to: "entangled"},
               {from: "embeddedness", to: "posthuman"},
               {from: "embeddedness", to: "deconstruction"},
               
               //diffraction Gr9
               {from: "diffraction", to: "situatedknowledges"},
               {from: "diffraction", to: "accountable"},
               {from: "diffraction", to: "posthuman"},
               {from: "diffraction", to: "embeddedness"},
               {from: "diffraction", to: "deconstruction"},
               {from: "diffraction", to: "becomingwith"},
               
               //transdisciplinary Gr4
               {from: "transdisciplinary", to: "situatedknowledges"},
               {from: "transdisciplinary", to: "embeddedness"},
               {from: "transdisciplinary", to: "diffraction"},
               {from: "transdisciplinary", to: "intraaction"},
               
               //intraaction Gr5
               {from: "intraaction", to: "situatedknowledges"},
               {from: "intraaction", to: "embeddedness"},
               
                //becomingwith Gr14
               {from: "becomingwith", to: "situatedknowledges"},
               {from: "becomingwith", to: "intraaction"},
               {from: "becomingwith", to: "diffraction"},
               {from: "situatedknowledges", to: "accountable"},
               {from: "deconstruction", to: "diffraction"}
           ]
       }
   }
 
})();