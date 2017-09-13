$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initial-showing").toggle();
    $(".initial-hidden").toggle();

  });

  $("h2").click(function() {
    $(".hiding").fadeToggle();
    $(".showing").fadeToggle();
  });
});
