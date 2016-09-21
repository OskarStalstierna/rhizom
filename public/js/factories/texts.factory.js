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