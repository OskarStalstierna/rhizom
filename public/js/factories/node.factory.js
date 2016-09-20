(function() {
 
   angular.module('app').factory('node', node);
 
   function node() {

       var shape = "box";
       var bg = "rgba(0,0,0,0.4)";
       var border = "rgba(0,0,0,0.4)";
       
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
                {id: "entangled", label: 'Entangled', shape: shape, color: {background: bg, highlight: { background: getColor(), border: getColor() }, border: border }},
                {id: "embeddedness", label: 'Embeddedness', shape: shape, color: {background: bg, highlight: { background: "blue", border: "blue" }, border: border }},
                {id: "accountable", label: 'Accountable', shape: shape, color: {background: bg, highlight: { background: "green", border: "green" }, border: border }},
                {id: "constructionist", label: 'Constructionist', shape: shape, color: {background: bg, highlight: { background: "yellow", border: "yellow" }, border: border }},
                {id: "materiality", label: 'Materiality / Materialization', shape: shape, color: {background: bg, highlight: { background: "pink", border: "pink" }, border: border }},
                {id: "positivist", label: 'Positivist', shape: shape, color: {background: bg, highlight: { background: "purple", border: "purple" }, border: border }},
                {id: "postconstructionist", label: 'Postconstructionist', shape: shape, color: {background: bg, highlight: { background: "hotpink", border: "hotpink" }, border: border }},
                {id: "discursive", label: 'Discursive', shape: shape, color: {background: bg, highlight: { background: "coral", border: "coral" }, border: border }},
                {id: "intraaction", label: 'Intra-action', shape: shape, color: {background: bg, highlight: { background: "orange", border: "orange" }, border: border }},
                {id: "posthuman", label: 'Posthuman', shape: shape, color: {background: bg, highlight: { background: "olivedrab", border: "olivedrab" }, border: border }},
                {id: "postcolonial", label: 'Postcolonial', shape: shape, color: {background: bg, highlight: { background: "white", border: "white" }, border: border }},
                {id: "feministscience", label: 'Feminist ...science', shape: shape, color: {background: bg, highlight: { background: "black", border: "black" }, border: border }},
                {id: "digitaldivides", label: 'Digital divides', shape: shape, color: {background: bg, highlight: { background: "grey", border: "grey" }, border: border }},
                {id: "epistemological", label: 'Epistemological', shape: shape, color: {background: bg, highlight: { background: "teal", border: "teal" }, border: border }},
                {id: "becomingwith", label: 'Becoming with', shape: shape, color: {background: bg, highlight: { background: "beige", border: "beige" }, border: border }},
                {id: "deconstruction", label: 'Deconstruction', shape: shape, color: {background: bg, highlight: { background: "brown", border:"brown" }, border: border }},
                {id: "methodologies", label: 'Methodologies', shape: shape, color: {background: bg, highlight: { background: "olive", border: "olive" }, border: border }},
                {id: "situatedknowledges", label: 'Situated knowledges', shape: shape, color: {background: bg, highlight: { background: "cornflowerblue", border: "cornflowerblue" }, border: border }},
                {id: "transdisciplinary", label: 'Transdisciplinary science', shape: shape, color: {background: bg, highlight: { background: "bisque", border: "bisque" }, border: border }},
                {id: "diffraction", label: 'Diffraction', shape: shape, color: {background: bg, highlight: { background: "saddlebrown", border: "saddlebrown" }, border: border }},
           ],
           edges: [
               {from: 1, to: 2},
                {from: 1, to: 3},
           ]
       }
   }
 
})();