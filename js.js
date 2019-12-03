
$(document).ready(function(){
    $("#addition").click(function(){
      $("ol").prepend("<input>");
    });

    $("#delete").click(function(){
      $("ol").empty();
    });

  $("#warning").click(function(){
      alert("Mistake");
    });
  });