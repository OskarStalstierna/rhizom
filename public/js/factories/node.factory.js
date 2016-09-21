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
                {id: "entangled", label: 'Entangled', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: '#d2c8bc', border: '#d2c8bc' }, border: border }},
               
               //embeddedness
                {id: "embeddedness", label: 'Embeddedness', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#995589", border: "#995589" }, border: border }},
               
               //accountable
                {id: "accountable", label: 'Accountable', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#556ab2", border: "#556ab2" }, border: border }},
               
               //constructionist
                {id: "constructionist", label: 'Constructionist', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#e5c120", border: "#e5c120" }, border: border }},
               
               //materiality
                {id: "materiality", label: 'Materiality / Materialization', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#0c2e3d", border: "#0c2e3d" }, border: border }},
               
               //positivist
                {id: "positivist", label: 'Positivist', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#e14d68", border: "#e14d68" }, border: border }},
               
               //postconstructionist
                {id: "postconstructionist", label: 'Postconstructionist', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#3d9c65", border: "#3d9c65" }, border: border }},
               
               //discursive
                {id: "discursive", label: 'Discursive', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#edcaa2", border: "#edcaa2" }, border: border }},
               
               //intraaction
                {id: "intraaction", label: 'Intra-action', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#3c1d44", border: "#3c1d44" }, border: border }},
               
               //posthuman
                {id: "posthuman", label: 'Posthuman', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#6d868c", border: "#6d868c" }, border: border }},
               
               //postcolonial
                {id: "postcolonial", label: 'Postcolonial', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#f37238", border: "#f37238" }, border: border }},
               
               //feministscience
                {id: "feministscience", label: 'Feminist ...science', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#862b1b", border: "#862b1b" }, border: border }},
               
               //digitaldivides
                {id: "digitaldivides", label: 'Digital divides', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: '#f59bb8', border: '#f59bb8' }, border: border }},
               
               //epistemological
                {id: "epistemological", label: 'Epistemological', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#e39e25", border: "#e39e25" }, border: border }},
               
               //becomingwith
                {id: "becomingwith", label: 'Becoming with', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#ef4c23", border: "#ef4c23" }, border: border }},
               
               //deconstruction
                {id: "deconstruction", label: 'Deconstruction', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#591e2a", border:"#591e2a" }, border: border }},
               
               //methodologies
                {id: "methodologies", label: 'Methodologies', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#122c1f", border: "#122c1f" }, border: border }},
               
               //situatedknowledges
                {id: "situatedknowledges", label: 'Situated knowledges', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#213161", border: "#213161" }, border: border }},
               
               //transdisciplinary
                {id: "transdisciplinary", label: 'Transdisciplinary science', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#53391c", border: "#53391c" }, border: border }},
               
               //diffraction
                {id: "diffraction", label: 'Diffraction', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: "#eb4d9b", border: "#eb4d9b" }, border: border }},
               
               //ontologi
               {id: "ontologi", label: 'Ontologi', shape: shape, font: {color: font}, color: {background: bg, highlight: { background: '#13744e', border: '#13744e' }, border: border }},
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