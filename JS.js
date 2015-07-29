$(test_w).ready(function() {
	$( "section" ).mouseenter(
		 function(){
 			$(this).prev("section").attr("id","kitchen");
			})
}
