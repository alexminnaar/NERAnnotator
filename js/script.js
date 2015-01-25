$(document).ready(function() {

	//creates span element around selected text
	function selectHTML() {
	    try {
	        if (window.ActiveXObject) {
	            var c = document.selection.createRange();
	            return c.htmlText;
	        }
	        var nNd = document.createElement("span");
	        var w = getSelection().getRangeAt(0);
	        w.surroundContents(nNd);
	        return nNd;
	        
	    } catch (e) {
	        if (window.ActiveXObject) {
	            return document.selection.createRange();
	        } else {
	            return getSelection();
	        }
	    }
	}
	
	
	

	
	//when the annotate button is clicked, open the annotation dialogue box where
	//the user can label the entity. Set the entity label equal to the id for the
	//highlighted span.
	$('#annotate').click(function(){
		 var mytext = selectHTML();   //selected text DOM
		 document.getElementById("mention").innerHTML=mytext.innerHTML;  //set mention tag to selected text
		 $( "#dialog" ).dialog( "open" );  //open dialog to choose entity type
	     mytext.id="EntityA";  //set id of the span of the selected text to be entity type selected in dialoge 
	});
	
	//dialog box in which the entity type is selected.
	$( "#dialog" ).dialog({
        autoOpen: false,  
        buttons: {
            PER: function() {$(this).dialog("close");},
            ORG:function() {$(this).dialog("close");},
            PLACE:function() {$(this).dialog("close");},
         }
     });

	
	
});