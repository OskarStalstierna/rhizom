(function() {
 
   angular.module('app').factory('texts', texts);

   function texts() {

       var texts = [
           {
                "group":"GR8",
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
                "group":"GR8",
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