var app = angular.module('app', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'public/views/home.html',
		controller: 'homeCtrl'
	}).otherwise({ redirectTo: '/' });
});

app.controller('homeCtrl', ["$scope", "$sce", "node", "texts", function($scope, $sce, node, texts){
    $scope.title = null;
    $scope.sce = $sce;
    $scope.splash = true;
    $scope.data = [];
    
    $scope.desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, magni. Nobis ullam adipisci voluptates consequatur eveniet deleniti expedita optio, vero quam culpa molestias facere laudantium enim vitae accusamus atque possimus odit voluptatem distinctio repellat eaque, error commodi et nulla.";
    
    
    setTimeout(function(){
        $scope.$apply(function() {
            $scope.splash = false;
        });
    }, 1000);
    
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
                $scope.data = texts.getByTag(params.nodes[0]);
                $scope.title = params.nodes[0];
            });
            
        }
    });

}]);

(function() {
 
   angular.module('app').factory('node', node);
 
    
    //Colors not used #547334 #c2ba30 #a82123
    
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
                {id: "Entangled", label: 'Entangled', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: '#d2c8bc', border: '#d2c8bc' }, border: border }},
               
               //embeddedness
                {id: "Embeddedness", label: 'Embeddedness', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#995589", border: "#995589" }, border: border }},
               
               //accountable
                {id: "Accountable", label: 'Accountable', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#556ab2", border: "#556ab2" }, border: border }},
               
               //constructionist
                {id: "Constructionist", label: 'Constructionist', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#e5c120", border: "#e5c120" }, border: border }},
               
               //materiality
                {id: "Materiality / Materialization", label: 'Materiality / Materialization', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#0c2e3d", border: "#0c2e3d" }, border: border }},
               
               //positivist
                {id: "Positivist", label: 'Positivist', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#e14d68", border: "#e14d68" }, border: border }},
               
               //postconstructionist
                {id: "Postconstructionist", label: 'Postconstructionist', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#3d9c65", border: "#3d9c65" }, border: border }},
               
               //discursive
                {id: "Discursive", label: 'Discursive', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#edcaa2", border: "#edcaa2" }, border: border }},
               
               //intraaction
                {id: "Intra-action", label: 'Intra-action', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#3c1d44", border: "#3c1d44" }, border: border }},
               
               //posthuman
                {id: "Posthuman", label: 'Posthuman', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#6d868c", border: "#6d868c" }, border: border }},
               
               //postcolonial
                {id: "Postcolonial", label: 'Postcolonial', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#f37238", border: "#f37238" }, border: border }},
               
               //feministscience
                {id: "Feminist ...science", label: 'Feminist ...science', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#862b1b", border: "#862b1b" }, border: border }},
               
               //digitaldivides
                {id: "Digital divides", label: 'Digital divides', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: '#f59bb8', border: '#f59bb8' }, border: border }},
               
               //epistemological
                {id: "Epistemological", label: 'Epistemological', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#e39e25", border: "#e39e25" }, border: border }},
               
               //becomingwith
                {id: "Becoming with", label: 'Becoming with', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#ef4c23", border: "#ef4c23" }, border: border }},
               
               //deconstruction
                {id: "Deconstruction", label: 'Deconstruction', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#591e2a", border:"#591e2a" }, border: border }},
               
               //methodologies
                {id: "Methodologies", label: 'Methodologies', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#122c1f", border: "#122c1f" }, border: border }},
               
               //situatedknowledges
                {id: "Situated knowledges", label: 'Situated knowledges', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#213161", border: "#213161" }, border: border }},
               
               //transdisciplinary
                {id: "Transdisciplinary science", label: 'Transdisciplinary science', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#53391c", border: "#53391c" }, border: border }},
               
               //diffraction
                {id: "Diffraction", label: 'Diffraction', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#eb4d9b", border: "#eb4d9b" }, border: border }},
               
               //ontologi
               {id: "Ontologi", label: 'Ontologi', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: '#13744e', border: '#13744e' }, border: border }},
           ],
           edges: [
               //epistemological Gr8
               {from: "Epistemological", to: "Situated knowledges"},
               {from: "Epistemological", to: "Ontologi"},
               {from: "Epistemological", to: "Accountable"},
               {from: "Epistemological", to: "Digital divides"},
               {from: "Epistemological", to: "Diffraction"},
               
               //embeddedness Gr10
               {from: "Embeddedness", to: "Discursive"},
               {from: "Embeddedness", to: "Digital divides"},
               {from: "Embeddedness", to: "Entangled"},
               {from: "Embeddedness", to: "Posthuman"},
               {from: "Embeddedness", to: "Deconstruction"},
               
               //diffraction Gr9
               {from: "Diffraction", to: "Situated knowledges"},
               {from: "Diffraction", to: "Accountable"},
               {from: "Diffraction", to: "Posthuman"},
               {from: "Diffraction", to: "Embeddedness"},
               {from: "Diffraction", to: "Deconstruction"},
               {from: "Diffraction", to: "Becoming with"},
               
               //transdisciplinary Gr4
               {from: "Transdisciplinary science", to: "Situated knowledges"},
               {from: "Transdisciplinary science", to: "Embeddedness"},
               {from: "Transdisciplinary science", to: "Diffraction"},
               {from: "Transdisciplinary science", to: "Intra-action"},
               
               //intraaction Gr5
               {from: "Intra-action", to: "Situated knowledges"},
               {from: "Intra-action", to: "Embeddedness"},
               
                //becomingwith Gr14
               {from: "Becoming with", to: "Situated knowledges"},
               {from: "Becoming with", to: "Intra-action"},
               {from: "Becoming with", to: "Diffraction"},
               {from: "Situated knowledges", to: "Accountable"},
               {from: "Deconstruction", to: "Diffraction"}
           ]
       }
   }
 
})();
(function() {
 
   angular.module('app').factory('texts', texts);

   function texts() {

       var texts = [
           {
                "group":"grupp8",
                "tag": "Epistemological",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lobortis lectus. Nunc mollis egestas metus sit amet condimentum. Fusce tincidunt, arcu id mattis elementum, elit lectus gravida enim, quis pharetra orci dui nec enim. Aenean at tempor nulla. Cras accumsan consectetur orci at efficitur.",
                "media": {
                    "links": [
                        {
                            "text": "google",
                            "link": "https://www.google.com"
                        },
                        {
                            "text": "google",
                            "link": "https://www.google.com"
                        },
                    ],
                    "imgs": [
                        "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg",
                    ],
                    "videos": [
                        "https://www.youtube.com/embed/tntOCGkgt98",
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"grupp8",
                "tag": "Posthuman",
                "text": "",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "https://upload.wikimedia.org/wikipedia/commons/6/60/Equus_quagga.jpg",
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
       ];

       return {
            getByTag: function(tag){
                var t = [];
                for (var i = 0; i < texts.length; i++) {
                    
                    if(tag == texts[i].tag){
                        t.push(texts[i]);
                    }
                    
                }

                return t;
            }         
       }
   }
 
})();