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
           ],
           edges: [
               //epistemological Gr8
               {from: "Epistemological", to: "Situated knowledges"},
               {from: "Epistemological", to: "Ontologi"},
               {from: "Epistemological", to: "Accountable"},
               {from: "Epistemological", to: "Digital divides"},
               {from: "Epistemological", to: "Diffraction", id: "Epistemological-Diffraction"},
               {from: "Epistemological", to: "Rhizomatik", id: "Epistemological-Rhizomatik"},
               
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