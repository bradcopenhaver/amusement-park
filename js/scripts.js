$(document).ready(function() {
  $("#height").change(function() {

    var height = $("#height").val();

    if (height === "1") {
      $(".kid").addClass("highlight");

      $(".teen").removeClass("highlight");
      $(".adult").removeClass("highlight");
    }
    else if (height === "2") {
      $(".teen").addClass("highlight");

      $(".kid").removeClass("highlight");
      $(".adult").removeClass("highlight");
    }
    else {
      $(".adult").addClass("highlight");
      $(".teen").addClass("highlight");

      $(".kid").removeClass("highlight");
    }
  });

});
