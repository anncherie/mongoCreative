$(document).ready(function(){
  $("#postComment").click(function(){
      var myobj = {Name:$("#name").val(),Comment:$("#comment1").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
  
      var url = "comment";
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


  $("#postComment2").click(function(){
      var myobj = {Name:$("#name2").val(),Comment:$("#comment2").val()};
      jobj = JSON.stringify(myobj);
      $("#json2").text(jobj);
  
      var url = "comment2";
	$.ajax({
		url:url,
		type: "POST",
		data: jobj,
		contentType: "application/json; charset=utf-8",	
		success: function(data,textStatus) {
    		$("#done2").html(textStatus);
	  }   
	})
	
      });

  $("#postComment3").click(function(){
    var myobj = {Name:$("#name3").val(),Comment:$("#comment3").val()};
    jobj = JSON.stringify(myobj);
    $("#json3").text(jobj);

    var url = "comment3";
$.ajax({
  url:url,
  type: "POST",
  data: jobj,
  contentType: "application/json; charset=utf-8",	
  success: function(data,textStatus) {
      $("#done3").html(textStatus);
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


    $("#getComments2").click(function() {
  $.getJSON('comment2', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment2 in data) {
        com = data[comment2];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments2").html(everything);
    });
  });

    $("#getComments3").click(function() {
  $.getJSON('comment3', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment2 in data) {
        com = data[comment2];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments3").html(everything);
    });
  });

//  $("#deleteComments").click(function() {
// 	var url = "comment"; 	
// 	$.ajax({
// 		url:url,
// 		type: "DELETE",
// 		data: jobj,
// 		contentType: "application/json; charset=utf-8",
// 		success: function(data,textStatus) {
// 		$("#done").html(textStatus);
// 	}

	// })
  // }); 

});
