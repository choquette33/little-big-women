$(document).ready( function() {
    $('#student1-before').click(function() {
    	$( "#student1-after" ).slideToggle( 500, function() {
            setTimeout(function(){
            	$("#yes1").css("color", "#FF5252")
            }, 1000);
            setTimeout(function(){
            	$("#yes2").css("color", "#FF5252")
            }, 1500);
            setTimeout(function(){
            	$("#yes3").css("color", "#FF5252")
            }, 2000);
            setTimeout(function(){
            	$("#yes4").css("color", "#FF5252")
            }, 2500);	
            setTimeout(function(){
            	$("#yes5").css("color", "#FF5252")
            }, 3000);
  		});
    });

    $('#student2-before').click(function() {
    	$( "#student2-after" ).slideToggle( 500, function() {
            setTimeout(function(){
            	$("#yes6").css("color", "#FF5252")
            }, 1000);
            setTimeout(function(){
            	$("#yes7").css("color", "#FF5252")
            }, 1500);
            setTimeout(function(){
            	$("#yes8").css("color", "#FF5252")
            }, 2000);	
  		});
    });

 	$('#student3-before').click(function() {
    	$( "#student3-after" ).slideToggle( 500, function() {
            setTimeout(function(){
            	$("#yes11").css("color", "#FF5252")
            }, 1000);
            setTimeout(function(){
            	$("#yes12").css("color", "#FF5252")
            }, 1500);
            setTimeout(function(){
            	$("#yes13").css("color", "#FF5252")
            }, 2000);
            setTimeout(function(){
            	$("#yes14").css("color", "#FF5252")
            }, 2500);	
  		});
    });

 	 $('#supporter1-before').click(function() {
    	$( "#supporter1-after" ).slideToggle( 500, function() {
            setTimeout(function(){
            	$("#yes11").css("color", "#FF5252")
            }, 1000);
            setTimeout(function(){
            	$("#yes12").css("color", "#FF5252")
            }, 1500);
            setTimeout(function(){
            	$("#yes13").css("color", "#FF5252")
            }, 2000);
            setTimeout(function(){
            	$("#yes14").css("color", "#FF5252")
            }, 2500);	
  		});
    });
 		
});



