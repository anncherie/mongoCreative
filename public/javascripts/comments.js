$(document).ready(function(){
  $("#postComment").click(function(){
      var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
  
      var url = "comment1";
	$.ajax({
		url:url,
		type: "POST",
		data: jobj,
		contentType: "application/json; charset=utf-8",	
		success: function(data,textStatus) {
    		$("#done").html(textStatus);
	}
	})
	
      });
  
  $("#getComments").click(function() {
  $.getJSON('comment1', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment1 in data) {
        com = data[comment1];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    });
  });

 $("#deleteComments").click(function() {
	var url = "comment"; 	
	$.ajax({
		url:url,
		type: "DELETE",
		data: jobj,
		contentType: "application/json; charset=utf-8",
		success: function(data,textStatus) {
		$("#done").html(textStatus);
	}

	})
  }); 

});
