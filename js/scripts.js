$(document).ready(function() {
  $("button").click(function() {
    $("body").removeClass();
    $("body").addClass("bgdarktxlight")
  });

  $("button#button2").click(function() {
    $("body").removeClass();
    $("body").addClass("bglighttxdark")
  });

});