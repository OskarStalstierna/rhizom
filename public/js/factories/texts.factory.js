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