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
(function() {
 
   angular.module('app').factory('node', node);
 
    
    //Colors not used #a82123
    
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
               
               //Rhizomatik
               {id: "Rhizomatik", label: 'Rhizomatik', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: '#547334', border: '#547334' }, border: border }},
               
               //Rhizomatik
               {id: "Onto-Epistemologi", label: 'Onto-Epistemologi', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: '#c2ba30', border: '#c2ba30' }, border: border }},
               
               //Rhizomatik
               {id: "Interaktion", label: 'Interaktion', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: '#a82123', border: '#a82123' }, border: border }},
           ],
           edges: [
               //epistemological Gr8
               /*{from: "Epistemological", to: "Situated knowledges"},
               {from: "Epistemological", to: "Ontologi"},
               {from: "Epistemological", to: "Accountable"},
               {from: "Epistemological", to: "Digital divides"},*/
               {from: "Epistemological", to: "Diffraction", id: "Epistemological-Diffraction"},
               //{from: "Epistemological", to: "Rhizomatik", id: "Epistemological-Rhizomatik"},
               
               //embeddedness Gr10
               /*{from: "Embeddedness", to: "Discursive"},
               {from: "Embeddedness", to: "Digital divides"},
               {from: "Embeddedness", to: "Entangled"},
               {from: "Embeddedness", to: "Posthuman"},
               {from: "Embeddedness", to: "Deconstruction"},*/
               
               //diffraction Gr9
               /*{from: "Diffraction", to: "Situated knowledges"},
               {from: "Diffraction", to: "Accountable"},
               {from: "Diffraction", to: "Posthuman"},
               {from: "Diffraction", to: "Embeddedness"},
               {from: "Diffraction", to: "Deconstruction"},
               {from: "Diffraction", to: "Becoming with"},*/
               {from: "Diffraction", to: "Posthuman", id: "Diffraction-Posthuman"},
               
               //transdisciplinary Gr4
               /*{from: "Transdisciplinary science", to: "Situated knowledges"},
               {from: "Transdisciplinary science", to: "Embeddedness"},
               {from: "Transdisciplinary science", to: "Diffraction"},
               {from: "Transdisciplinary science", to: "Intra-action"},*/
               {from: "Transdisciplinary science", to: "Embeddedness", id: "Transdisciplinary science-Embeddedness"},
               
               //intraaction Gr5
               /*{from: "Intra-action", to: "Situated knowledges"},
               {from: "Intra-action", to: "Embeddedness"},*/
               {from: "Intra-action", to: "Accountable", id: "Intra­-action-Accoutability"},
               {from: "Intra-action", to: "Diffraction", id: "Intra­-action-Diffraction"},
               {from: "Intra-action", to: "Interaktion", id: "Intra­-action-Interaktion"},
               {from: "Intra-action", to: "Ontologi", id: "Intra­-action-Ontologi"},
               
               
                //becomingwith Gr14
               /*{from: "Becoming with", to: "Situated knowledges"},
               {from: "Becoming with", to: "Intra-action"},
               {from: "Becoming with", to: "Diffraction"},
               {from: "Situated knowledges", to: "Accountable"},
               {from: "Deconstruction", to: "Diffraction"}*/

               //gr3
               
               {from: "Entangled", to: "Diffraction", id: "Entangled-Diffraction"},
               
               //gr18
               {from: "Posthuman", to: "Intra­-action", id: "Posthuman-Intra­-action"},
               
               //gr12
               {from: "Discursive", to: "Materiality / Materialization", id: "Discursive-Materiality / Materialization"},
               
               //gr7 + gr18
               {from: "Posthuman", to: "Digital divides", id: "Posthuman-Digital divides"},
               
               //gr3
               {from: "Materiality / Materialization", to: "Situated knowledges", id: "Materiality / Materialization-Situated knowledges"},
               {from: "Materiality / Materialization", to: "Intra-action", id: "Materiality / Materialization-Intra-action"},
           ]
       }
   }
 
})();
(function() {
 
   angular.module('app').factory('texts', texts);

   function texts() {

       var texts = [
           {
                "group":"gr8",
                "tag": "Epistemological-Diffraction",
                "text": "Bilderna till vänster har diffrakterats genom ett program som vi har använt som prisma och de mindre bilderna till höger är diffraktionsgittret.",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "https://me1582ht16.files.wordpress.com/2016/09/14360425_10210715975077425_1906342575_o.jpg?w=660",
                    ],
                    "videos": [
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"gr8",
                "tag": "Rhizomatik",
                "text": "",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "public/img/rhizom.png",
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"gr8",
                "tag": "Epistemological",
                "text": "Ens konstant skiftande synsätt och förståelse gör att ens tolkningar alltid är i rörelse och aldrig är den samma.",
                "media": {
                    "links": [
                    ],
                    "imgs": [

                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"gr8",
                "tag": "Onto-Epistemologi",
                "text": "Artefakten utvecklar kunskapen och kunskapen utvecklar artefakten.",
                "media": {
                    "links": [
                    ],
                    "imgs": [

                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"gr3",
                "tag": "Entangled-Diffraction",
                "text": "",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "http://s22.postimg.org/eaec00dxt/diffraction.png",
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"gr5",
                "tag": "Intra­-action-Accoutability",
                "text": "Hur framställs personen i sekvens?",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/283941149&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
                    ]
                }
            },
            {
                "group":"gr5",
                "tag": "Intra­-action-Diffraction",
                "text": "Utan ljud, skräck?",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                    ],
                    "videos": [
                      "https://www.youtube.com/embed/Pefk0SQ89lc"
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"gr5",
                "tag": "Intra­-action-Interaktion",
                "text": "",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "http://pre01.deviantart.net/4c3d/th/pre/i/2016/266/7/7/intraktion_by_tussensessan-daikwk7.jpg",
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"gr5",
                "tag": "Intra-action",
                "text": "förhållanden mellan människor + objekt. människor+människor. Ur interaktion mellan teknologier + människor + kultur, natur.",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "https://me1582ht16.files.wordpress.com/2016/09/spoon1.gif?w=660",
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"gr5",
                "tag": "Intra­-action-Ontologi",
                "text": "Skog?",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "https://me1582ht16.files.wordpress.com/2016/09/skog.jpg?w=1200&h=&crop=1",
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"GR9 ­- Viktorija Meinoryte",
                "tag": "Diffraction-Posthuman",
                "text": "Diffrakterad Posthumanism. Både det mänskliga och det ickemänskliga är aktörer i posthumanismen. Detta speglas i målningen med ballongen. För att vinden ska kunna sätta fart på ballongen och skapa en målning, behövs jag för att rigga upp och sedan låta de ickemänskliga materialen skapa.?",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "https://me1582ht16.files.wordpress.com/2016/09/namnlc3b6st-1-01.jpg?w=881",
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"GR1",
                "tag": "Materiality / Materialization",
                "text": "Materialitet, hur vi reagerar på objekt, utifrån deras material.",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        //Add image here
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"GR1",
                "tag": "Materiality / Materialization-Situated knowledges",
                "text": "Material tolkas utifrån tidigare erfarenheter, därför kan saker som hur en boll kommer att studsa, ofta avgöras, innanden träffar golvet (baserat på dess Material).",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        //Add image here
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"GR1",
                "tag": "Materiality / Materialization-Intra-action",
                "text": "Relationell Materialitet innebär att ett objekt kräver en relation för att ha en funktion (attribut).",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                    ],
                    "videos": [
                      
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"GR4",
                "tag": "Transdisciplinary science-Embeddedness",
                "text": "Istället för att ta sig an hela förståelsen av ett begrepp kan vi diffraktera denna och skapa små berättelser, perspektiv kopplat till begreppet. Embedded_Trans lyfter fram leken som metod där vi utgått från transdisciplinär vetenskap och prövat begreppet mot embeddedness. Gestaltningen utforskar vad som händer i mötet mellan två fragment genom lekens möjligheter.",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "https://me1582ht16.files.wordpress.com/2016/09/embedded-poster-3.pdf",
                    ],
                    "videos": [
                       "https://www.youtube.com/embed/Wji0SmYO9tg",
                    ],
                    "sounds": [
                        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/284083691&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
                    ]
                }
            },
            {
                "group":"GR18",
                "tag": "Posthuman-Intra­-action",
                "text": "Koppling mellan posthumanism och intra­aktion i form av en auditiv representation.",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                    ],
                    "videos": [
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"GR7 + GR18",
                "tag": "Posthuman-Digital divides",
                "text": "Prövningen utforskar hur teknologi som internet, smartphones och tablets tar allt mer plats i människans liv. Tanken är att vi långsamt lever mer och mer inom det posthumanistiska riket. Det virtuella riket. Internet är en enda stor verklighet som vi fördjupar oss i.",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                    ],
                    "videos": [
                        "https://www.youtube.com/embed/2pe_FIuaz1g",
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"GR12",
                "tag": "Deconstruction",
                "text": "Deconstruction var första steget i animationen, vi ville bryta ner bilden och sen bygga upp den igen. Genom nedbrytningen fick vi större förståelse för bilden och den fick mer mening genom animationen.",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "https://me1582ht16.files.wordpress.com/2016/09/deconstruction_klar_resized.gif",
                    ],
                    "videos": [
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"GR12",
                "tag": "Diffraction",
                "text": "Flickan rör sig framåt på molnet. Vart är hon på väg? Spelar det någon roll vart hon är på väg?",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "https://me1582ht16.files.wordpress.com/2016/09/deconstruction1_diffraktion_resized.gif?w=660",
                    ],
                    "videos": [
                    ],
                    "sounds": [
                        
                    ]
                }
            },
            {
                "group":"GR12",
                "tag": "Discursive-Materiality / Materialization",
                "text": "Ett ting påverkar ett annat ting, i detta fall påverkar vinden hur kläderna rör sig. Som animerare bestämmer man hur animationen ska påverka berättandet.",
                "media": {
                    "links": [
                    ],
                    "imgs": [
                        "https://me1582ht16.files.wordpress.com/2016/09/deconstruction_disscursive.gif?w=660",
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